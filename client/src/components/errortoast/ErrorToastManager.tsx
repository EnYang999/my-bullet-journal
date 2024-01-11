import ReactDOM from "react-dom/client";
import Toast, { ToastProps } from "./ErrorToast";
import "./ErrorToast.css";
interface ToastOptions {
	id?: string;
	title: string;
	content: string;
	duration?: number;
}

export class ToastManager {
	private containerRef: HTMLDivElement;
	private root: ReactDOM.Root;
	private toasts: ToastProps[] = [];

	constructor() {
		const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
		const toastContainer = document.createElement("div") as HTMLDivElement;
		toastContainer.id = "toast-container-main";
		body.insertAdjacentElement("beforeend", toastContainer);
		this.containerRef = toastContainer;
		this.root = ReactDOM.createRoot(this.containerRef);
	}

	public show(options: ToastOptions): void {
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
		// const toastElement = document.getElementById(id);
		// if (toastElement) {
		// 	toastElement.classList.add("fadeOut");
		// }
		this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
		this.render();
	}

	private render(): void {
		const toastsList = this.toasts.map((toastProps: ToastProps) => (
			<Toast key={toastProps.id} {...toastProps} />
		));
		this.root.render(toastsList);
	}
}

export const toast = new ToastManager();
