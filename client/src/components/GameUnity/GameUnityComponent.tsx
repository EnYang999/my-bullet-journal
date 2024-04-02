import { Unity, useUnityContext } from "react-unity-webgl";

const GameUnityComponent = () => {
	const { unityProvider } = useUnityContext({
		loaderUrl: "/assets/unity/Build/MemorOdysseyForWeb.loader.js",
		dataUrl: "/assets/unity/Build/MemorOdysseyForWeb.data",
		frameworkUrl: "/assets/unity/Build/MemorOdysseyForWeb.framework.js",
		codeUrl: "/assets/unity/Build/MemorOdysseyForWeb.wasm",
	});

	return (
		<Unity
			unityProvider={unityProvider}
			style={{ backgroundColor: "orange", width: "80%" }}
		/>
	);
};
export default GameUnityComponent;
