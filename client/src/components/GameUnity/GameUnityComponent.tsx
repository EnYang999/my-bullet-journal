import { Unity, useUnityContext } from "react-unity-webgl";
interface Props {
	style?: React.CSSProperties;
}
const GameUnityComponent = ({ style }: Props) => {
	const { unityProvider } = useUnityContext({
		loaderUrl: "/assets/unity/Build/MemorOdysseyForWeb.loader.js",
		dataUrl: "/assets/unity/Build/MemorOdysseyForWeb.data",
		frameworkUrl: "/assets/unity/Build/MemorOdysseyForWeb.framework.js",
		codeUrl: "/assets/unity/Build/MemorOdysseyForWeb.wasm",
	});

	return <Unity unityProvider={unityProvider} style={{ ...style }} />;
};
export default GameUnityComponent;
