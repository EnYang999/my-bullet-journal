import React, { useEffect } from "react";

const UnityComponent: React.FC = () => {
	useEffect(() => {
		const container = document.querySelector("#unity-container") as HTMLElement;
		const canvas = document.querySelector("#unity-canvas") as HTMLElement;
		const loadingBar = document.querySelector(
			"#unity-loading-bar"
		) as HTMLElement;
		const progressBarFull = document.querySelector(
			"#unity-progress-bar-full"
		) as HTMLElement;
		const fullscreenButton = document.querySelector(
			"#unity-fullscreen-button"
		) as HTMLElement;
		const warningBanner = document.querySelector(
			"#unity-warning"
		) as HTMLElement;

		// Shows a temporary message banner/ribbon for a few seconds, or
		// a permanent error message on top of the canvas if type=='error'.
		// If type=='warning', a yellow highlight color is used.
		// Modify or remove this function to customize the visually presented
		// way that non-critical warnings and error messages are presented to the
		// user.
		function unityShowBanner(msg: string, type: string) {
			function updateBannerVisibility() {
				if (warningBanner) {
					warningBanner.style.display = warningBanner.children.length
						? "block"
						: "none";
				}
			}
			const div = document.createElement("div");
			div.innerHTML = msg;
			if (warningBanner) {
				warningBanner.appendChild(div);
				if (type === "error") {
					div.style.background = "red";
					div.style.padding = "10px";
				} else {
					if (type === "warning") {
						div.style.background = "yellow";
						div.style.padding = "10px";
					}

					setTimeout(() => {
						if (warningBanner) {
							warningBanner.removeChild(div);
							updateBannerVisibility();
						}
					}, 5000);
				}
				updateBannerVisibility();
			}
		}

		const buildUrl = "Build";
		const loaderUrl = buildUrl + "/MemorOdysseyForWeb.loader.js";
		const config = {
			dataUrl: buildUrl + "/MemorOdysseyForWeb.data.gz",
			frameworkUrl: buildUrl + "/MemorOdysseyForWeb.framework.js.gz",
			codeUrl: buildUrl + "/MemorOdysseyForWeb.wasm.gz",
			streamingAssetsUrl: "StreamingAssets",
			companyName: "DefaultCompany",
			productName: "CS951-MemoryOdyssey",
			productVersion: "0.1",
			showBanner: unityShowBanner,
		};

		if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
			const meta = document.createElement("meta");
			meta.name = "viewport";
			meta.content =
				"width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
			document.getElementsByTagName("head")[0].appendChild(meta);
			if (container) container.className = "unity-mobile";
			if (canvas) canvas.className = "unity-mobile";
		} else {
			if (canvas) {
				canvas.style.width = "960px";
				canvas.style.height = "600px";
			}
		}

		if (loadingBar) loadingBar.style.display = "block";

		const script = document.createElement("script");
		script.src = loaderUrl;
		script.onload = () => {
			(window as any)
				.createUnityInstance(canvas, config, (progress: number) => {
					if (progressBarFull)
						progressBarFull.style.width = 100 * progress + "%";
				})
				.then((unityInstance: any) => {
					if (loadingBar) loadingBar.style.display = "none";
					if (fullscreenButton) {
						fullscreenButton.onclick = () => {
							unityInstance.SetFullscreen(1);
						};
					}
				})
				.catch((message: string) => {
					alert(message);
				});
		};

		document.body.appendChild(script);

		return () => {
			if (script && document.body.contains(script)) {
				document.body.removeChild(script);
			}
		};
	}, []);

	return (
		<div>
			<div id='unity-container' className='unity-desktop'>
				<canvas
					id='unity-canvas'
					width={960}
					height={600}
					tabIndex={-1}
				></canvas>
				<div id='unity-loading-bar'>
					<div id='unity-logo'></div>
					<div id='unity-progress-bar-empty'>
						<div id='unity-progress-bar-full'></div>
					</div>
				</div>
				<div id='unity-warning'> </div>
				<div id='unity-footer'>
					<div id='unity-webgl-logo'></div>
					<div id='unity-fullscreen-button'></div>
					<div id='unity-build-title'>CS951-MemoryOdyssey</div>
				</div>
			</div>
		</div>
	);
};

export default UnityComponent;
