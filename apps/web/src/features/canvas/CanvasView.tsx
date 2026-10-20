import { Layer, Rect, Stage, Text } from 'react-konva'
import { useElementSize } from './useElementSize'

export function CanvasView() {
  const { ref, size } = useElementSize<HTMLDivElement>()
  const ready = size.width > 0 && size.height > 0

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      {ready && (
        <Stage width={size.width} height={size.height}>
          <Layer>
            <Rect
              x={80}
              y={80}
              width={160}
              height={100}
              cornerRadius={8}
              fill="#c2561c"
            />
            <Text
              x={80}
              y={200}
              text="Konva is rendering"
              fontSize={16}
              fill="#6b655a"
            />
          </Layer>
        </Stage>
      )}
    </div>
  )
}