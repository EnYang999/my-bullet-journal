import ReactDOM from "react-dom/client";
import Toast, { ToastProps } from "./ErrorToast";

interface ToastOptions {
	id?: string;
	title: string;
	content: string;
	duration?: number;
}

export class ToastManager {
	private containerRef: HTMLDivElement | null = null;
	private root: ReactDOM.Root | null = null;
	private toasts: ToastProps[] = [];

	private initialize() {
		if (!this.containerRef || !this.root) {
			const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
			const toastContainer = document.createElement("div") as HTMLDivElement;
			toastContainer.id = "toast-container-main";
			body.insertAdjacentElement("beforeend", toastContainer);
			this.containerRef = toastContainer;
			this.root = ReactDOM.createRoot(this.containerRef);
		}
	}

	public show(options: ToastOptions): void {
		console.log("====================================");
		console.log("show");
		console.log("====================================");

		this.initialize();
		const toastId = Math.random().toString(36);
		const toast: ToastProps = {
			id: toastId,
			...options,
			destroy: () => this.destroy(options.id ?? toastId),
		};

		this.toasts = [toast, ...this.toasts];
		this.render();
	}

	public destroy(id: string): void {
		// fade out doesn't work
		console.log("====================================");
		console.log("destroy");
		console.log("====================================");
		const toastElement = document.getElementById(id);
		if (toastElement) {
			toastElement.classList.add("slide-out");
		}
		setTimeout(() => {
			// Remove the toast from the list after the fade out transition
			this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
			this.render();
			this.cleanupIfEmpty();
		}, 300);
	}
	private cleanupIfEmpty(): void {
		if (this.root && this.containerRef) {
			this.root.unmount();
			this.containerRef.remove();
			this.containerRef = null;
			this.root = null;
		}
	}

	private render(): void {
		if (this.root) {
			const toastsList = this.toasts.map((toastProps: ToastProps) => (
				<Toast key={toastProps.id} {...toastProps} />
			));
			this.root.render(<div>{toastsList}</div>);
		}
	}
}

export const toast = new ToastManager();
