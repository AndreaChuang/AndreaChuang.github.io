const categoryGroup = [
    {
        id: 1,
        name: '產品分類',
        categoryItem: [
            {
                id: 0,
                name: '全部商品'
            },
            {
                id: 1,
                name: '水晶手鍊'
            },
            {
                id: 2,
                name: '水晶耳環'
            },
            {
                id: 3,
                name: '水晶項鍊'
            },
            {
                id: 4,
                name: '水晶戒指'
            },
        ]
    },
    {
        id: 2,
        name: '挑選指南',
        categoryItem: [
            {
                id: 0,
                name: '全部商品'
            },
            {
                id: 1,
                name: '事業'
            },
            {
                id: 2,
                name: '健康'
            },
            {
                id: 3,
                name: '桃花'
            },
            {
                id: 4,
                name: '除晦'
            },
        ]
    }
]


const products = [
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1001",
        "imgFileName": "2.1.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1002",
        "imgFileName": "2.2.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1003",
        "imgFileName": "2.3.png",
        "category": "水晶手鍊",
        "name": "龍血石 男士手鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "心輪",
        "constellation": "金牛座、處女座、摩羯座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3112",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1004",
        "imgFileName": "2.4.png",
        "category": "水晶手鍊",
        "name": "虎眼石 男士手鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "牡羊座、獅子座、射手座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3113",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1005",
        "imgFileName": "2.5.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3114",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1006",
        "imgFileName": "2.6.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "1,2",
        "id": "1007",
        "imgFileName": "2.7.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1008",
        "imgFileName": "2.1.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1009",
        "imgFileName": "2.2.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1010",
        "imgFileName": "2.3.png",
        "category": "水晶手鍊",
        "name": "龍血石 男士手鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "心輪",
        "constellation": "金牛座、處女座、摩羯座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3112",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1011",
        "imgFileName": "2.4.png",
        "category": "水晶手鍊",
        "name": "虎眼石 男士手鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "牡羊座、獅子座、射手座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3113",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1012",
        "imgFileName": "2.5.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3114",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1013",
        "imgFileName": "1.1.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1014",
        "imgFileName": "1.2.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1015",
        "imgFileName": "1.3.png",
        "category": "水晶手鍊",
        "name": "龍血石 男士手鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "心輪",
        "constellation": "金牛座、處女座、摩羯座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3112",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1016",
        "imgFileName": "1.4.png",
        "category": "水晶手鍊",
        "name": "虎眼石 男士手鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "牡羊座、獅子座、射手座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3113",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1017",
        "imgFileName": "1.5.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3114",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1018",
        "imgFileName": "1.1.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1019",
        "imgFileName": "1.2.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "3,4",
        "id": "1020",
        "imgFileName": "1.3.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "4,1",
        "id": "1021",
        "imgFileName": "1.4.png",
        "category": "水晶手鍊",
        "name": "血石碧玉 男士手鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "臍輪",
        "constellation": "雙子座、天秤座、水瓶座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "4,1",
        "id": "1022",
        "imgFileName": "1.5.png",
        "category": "水晶手鍊",
        "name": "龍血石 男士手鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "心輪",
        "constellation": "金牛座、處女座、摩羯座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3112",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "4,1",
        "id": "1023",
        "imgFileName": "1.1.png",
        "category": "水晶手鍊",
        "name": "虎眼石 男士手鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "牡羊座、獅子座、射手座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3113",
        "inventory": "999"
    },
    {
        "categoryID": "1",
        "guideID": "4,1",
        "id": "1024",
        "imgFileName": "1.2.png",
        "category": "水晶手鍊",
        "name": "斑紋碧玉 男士手鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3114",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2001",
        "imgFileName": "4.1.png",
        "category": "水晶耳環",
        "name": "紫水晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2002",
        "imgFileName": "4.2.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2003",
        "imgFileName": "4.3.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2004",
        "imgFileName": "4.4.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2005",
        "imgFileName": "4.5.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2006",
        "imgFileName": "4.1.png",
        "category": "水晶耳環",
        "name": "紫水晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2007",
        "imgFileName": "4.2.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2008",
        "imgFileName": "4.3.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2009",
        "imgFileName": "4.4.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2010",
        "imgFileName": "4.5.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2011",
        "imgFileName": "4.1.png",
        "category": "水晶耳環",
        "name": "紫水晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "2",
        "guideID": "4,1",
        "id": "2012",
        "imgFileName": "4.2.png",
        "category": "水晶耳環",
        "name": "紫龍晶 女士耳環",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "S,M,L",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3110",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3001",
        "imgFileName": "2.1.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3111",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3002",
        "imgFileName": "2.2.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3112",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3003",
        "imgFileName": "2.3.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "3580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3113",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3004",
        "imgFileName": "2.4.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "2580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3114",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3005",
        "imgFileName": "2.5.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3115",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3006",
        "imgFileName": "2.6.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3116",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3007",
        "imgFileName": "2.7.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "海底輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3117",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3008",
        "imgFileName": "2.1.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "12cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3118",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3009",
        "imgFileName": "2.2.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "13cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3119",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3010",
        "imgFileName": "2.3.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "14cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3120",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3011",
        "imgFileName": "2.4.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "15cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3121",
        "inventory": "999"
    },
    {
        "categoryID": "3",
        "guideID": "2,3",
        "id": "3012",
        "imgFileName": "2.5.png",
        "category": "水晶項鍊",
        "name": "紫水晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "16cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3122",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "1,2",
        "id": "4001",
        "imgFileName": "1.1.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "17cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3123",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4002",
        "imgFileName": "1.2.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "18cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3124",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4003",
        "imgFileName": "1.3.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "3530",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "19cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3125",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4004",
        "imgFileName": "1.4.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "20cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3126",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4005",
        "imgFileName": "1.5.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "21cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3127",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4006",
        "imgFileName": "1.1.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "22cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3128",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4007",
        "imgFileName": "1.2.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "23cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3129",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4008",
        "imgFileName": "1.3.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "24cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3130",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4009",
        "imgFileName": "1.4.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "25cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3131",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4010",
        "imgFileName": "1.5.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "3380",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "26cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3132",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4011",
        "imgFileName": "1.1.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "780",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "27cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3133",
        "inventory": "999"
    },
    {
        "categoryID": "4",
        "guideID": "3,4",
        "id": "4012",
        "imgFileName": "1.2.png",
        "category": "水晶戒指",
        "name": "紫龍晶 女士項鍊",
        "currency": "NTD",
        "price": "1580",
        "hardness": "7",
        "chakra": "眉心輪",
        "constellation": "雙魚座、巨蠍座、天蠍座",
        "size": "28cm,14cm,16cm,18cm,20cm",
        "color": "white,yellow,red,green,blue",
        "poductNumber": "21K3134",
        "inventory": "999"
    }
]


