import { ResponsiveBar } from '@nivo/bar'
const data =[
    {
      "country": "Jan",
      "hot dog": 55,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 15,
      "burgerColor": "hsl(93, 53%, 54%)",
      "sandwich": 19,
      "sandwichColor": "hsl(180, 100%, 50%)",
      "kebab": 290,
      "kebabColor": "hsl(150, 86%, 49%)",

    },
    {
      "country": "Feb",
      "hot dog": 51,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 29,
      "burgerColor": "hsl(166, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(58, 70%, 50%)",
      "kebab": 112,
      "kebabColor": "hsl(235, 70%, 50%)",
 
    },
    {
      "country": "march",
      "hot dog": 104,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 189,
      "burgerColor": "hsl(315, 70%, 50%)",
      "sandwich": 138,
      "sandwichColor": "hsl(344, 70%, 50%)",
      "kebab": 80,
      "kebabColor": "hsl(76, 70%, 50%)",
 
    },
    {
      "country": "April",
      "hot dog": 107,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 135,
      "burgerColor": "hsl(13, 70%, 50%)",
      "sandwich": 155,
      "sandwichColor": "hsl(94, 70%, 50%)",
      "kebab": 181,
      "kebabColor": "hsl(228, 70%, 50%)",

    },
    {
      "country": "may",
      "hot dog": 121,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 199,
      "burgerColor": "hsl(134, 70%, 50%)",
      "sandwich": 49,
      "sandwichColor": "hsl(191, 70%, 50%)",
      "kebab": 63,
      "kebabColor": "hsl(242, 70%, 50%)",

    },
    {
      "country": "June",
      "hot dog": 7,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 2,
      "burgerColor": "hsl(203, 70%, 50%)",
      "sandwich": 64,
      "sandwichColor": "hsl(318, 70%, 50%)",
      "kebab": 39,
      "kebabColor": "hsl(111, 70%, 50%)",

    },
    {
      "country": "july",
      "hot dog": 58,
      "hot dogColor": "hsl(44, 85%, 50%)",
      "burger": 192,
      "burgerColor": "hsl(272, 70%, 50%)",
      "sandwich": 166,
      "sandwichColor": "hsl(74, 70%, 50%)",
      "kebab": 13,
      "kebabColor": "hsl(276, 70%, 50%)",

    }
  ]

 export const Bar = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
        ]}
        isInteractive={false}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)