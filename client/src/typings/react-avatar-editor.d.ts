declare module 'react-avatar-editor' {
  import * as React from 'react';

  interface Position {
    x: number;
    y: number;
  }

  interface AvatarEditorProps {
    scale?: number;
    width?: number;
    height?: number;
    position?: Position;
    rotate?: number;
    border?: number | [number, number];
    color?: [number, number, number, number]; // RGBA
    style?: React.CSSProperties;
    image: string | File;
    className?: string;
    onLoadSuccess?: (imgInfo: { width: number; height: number }) => void;
    onLoadFailure?: (event: Event) => void;
    onImageReady?: (event: React.SyntheticEvent) => void;
    onMouseUp?: (event: React.SyntheticEvent) => void;
    onMouseMove?: (event: React.SyntheticEvent) => void;
    onPositionChange?: (position: Position) => void;
    disableBoundaryChecks?: boolean;
    borderRadius?: number;
    anchorSize?: number;
    imageName?: string;
  }

  export default class AvatarEditor extends React.Component<AvatarEditorProps> {
    getImage(): HTMLCanvasElement;
    getImageScaledToCanvas(): HTMLCanvasElement;
    getCroppingRect(): { x: number; y: number; width: number; height: number };
  }
}