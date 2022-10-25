# Script to calculate events position based on location (x,y) coordinates avaliable on try5.json
# The output can be directly copied as style required in Map.tsx to display events on map

# NOTE: You will need to replace true by True first

eventList = [
    {
        "class": "computer",
        "height": 0,
        "id": 35,
        "name": "cyberquest",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 2934.24242424242,
        "y": 4176.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 36,
        "name": "electromania",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 4052.03242424242,
        "y": 2227.81696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 37,
        "name": "powersurge",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 3316.12242424242,
        "y": 1501.93696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 39,
        "name": "rasayans",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 2996.24242424242,
        "y": 2009.0303030303,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 43,
        "name": "mechrocosm",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 3890.24242424242,
        "y": 3724.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 46,
        "name": "nirmaan",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 4432.24242424242,
        "y": 1751.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 38,
        "name": "genesis",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 2602.24242424242,
        "y": 573.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 45,
        "name": "oligopoly",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 3954.90909090909,
        "y": 5127.0303030303,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 44,
        "name": "monopoly",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 3657.57575757575,
        "y": 5279.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 42,
        "name": "gnotalks",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 5005.57575757575,
        "y": 4043.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 49,
        "name": "aerodynamix",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 5902.24242424242,
        "y": 2929.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 48,
        "name": "astrowing",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 4867.63575757575,
        "y": 4597.08696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 47,
        "name": "kreedomania",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 4168.24242424242,
        "y": 333.69696969697,
    },
    {
        "class": "computer",
        "height": 0,
        "id": 51,
        "name": "gnosiomania",
        "point": True,
        "rotation": 0,
        "visible": True,
        "width": 0,
        "x": 1680,
        "y": 3118.66666666667,
    },
]


output1 = """<Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: """
# eventList[0][x] = 25.88  # left
output2 = """ + '%',
                      top: """
# eventList[0].[y]= 50.81  # top
output3 = """ + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">"""
# eventList[0][name] = "cyberquest".toUpperCase()
output4 = """</div>
                    <div className="text-blue-900">"""
# eventQuotes[i]
output5 = """</div>
                  </div>
                  <Tooltip.Arrow height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>"""

counter = 0

for i in range(len(eventList)):
    eventList[i]["x"] = eventList[i]["x"] / 7152 * 100
    eventList[i]["y"] = eventList[i]["y"] / 6145 * 100
    eventList[i]["name"] = eventList[i]["name"].upper()

    output = (
        output1
        + str(round(eventList[i]["x"] - 0.88, 2))
        + output2
        + str(round(eventList[i]["y"] - 1.84, 2))
        + output3
        + eventList[i]["name"]
        + output4
        + "{eventQuotes["
        + str(i)
        + "]}"
        + output5
    )
    counter += 1
    print(output)

print("\n", counter)
