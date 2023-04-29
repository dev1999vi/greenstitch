import { ResponsivePie } from '@nivo/pie'
const data = [
    {
      "id": "spinning",
      "label": "Spinning",
      "value": 22,
      "color": "hsla(137, 53%, 57%, 1)"
    },
    {
      "id": "transportation",
      "label": "Transportation",
      "value": 16,
      "color": "hsla(180, 65%, 60%, 1)"
    },
    {
      "id": "carding",
      "label": "Carding",
      "value": 27,
      "color": "#84c84c"
    },
    {
      "id": "heatingandcooling",
      "label": "heating and cooling",
      "value": 35,
      "color": "hsl(45, 99%, 50%)"
    },
  ]
export const Pie = () => (
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    />
)