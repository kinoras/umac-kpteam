Vue.component("food-item", {
	props: ["food"],
	template: `<a href='#' class='restaurant-name' @click="currentPage = 'pickTime'; passFoodAction(food)" v-on:click="$emit('next')"><span class='food-name'>{{food.name}}</span><span class='food-price'>MOP {{food.price}}</span></a>`
});

Vue.component("restaurant",{
	props: ["restaurant", "restaurants"],
	template: `<div><food-item v-for='food in restaurants' :food='food' v-on:next="$emit('nextNext')"></food-item></div>`,
});


var app = new Vue({
	el: "#content",
	data: {
		currentPage: 'selectRestaurant',
		selectedRestaurant: '',
		selectedFood: '',
		selectedFoodPrice: '',
		bigdatas: {},
		restaurants: {
			"MLC":  [
					{
						"name": "紅燒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸辣海帶",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "涼瓜炒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "番茄蛋花湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "沙爹醬牛肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "菜圃炒蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "麻婆豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "花生眉豆煲雞腳",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "冬菇滑雞",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "西蘭花火腿",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸辣薯仔絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "五指毛桃煲龍骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "子姜燜鴨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "薯仔片炒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豆角炒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "涼瓜黃豆排骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "清蒸皖魚",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蘿蔔炆牛腩",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "咖喱蒸什菜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "木瓜龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒜香骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "羅漢齋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "冬瓜燜鴨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "生熟地龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "云耳蒸雞",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "西蘭花炒肉片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅燒豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "節瓜龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
				],
			"CKYC": [
					{
						"name": "長通粉沙律",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豉汁蒸排骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "尖椒炒鮮魷",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豆角炒雞柳",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "甘筍炒節瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅酒燴雞球",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "尖椒回鍋肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "滷肉蒸豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "香蔥炒豆角",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "涼拌支竹",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "咖喱牛腩",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蘿蔔炒魚片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅腸炒西芹",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "雲耳炒蓮片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "香脆炸肉排",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "西芹雲耳炒雞柳",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "清炒涼瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "鯪魚肉浸大芹菜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "泰式醬烤豬頸肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸菜雲耳回鍋肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "川辣茄子燒豆蔔",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒜蓉蒸節瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "薯仔沙律",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "鹵水雞翼",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "南乳豆卜燜鴨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "火腿蒸水蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蠔油炒椰菜花",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸辣青瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蘿蔔燜牛腩",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "梅菜蒸肉餅",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "菜脯炒翠瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "香蔥炒豆角",
						"price": "0",
						"discount": "0",
						"available": 1,
					}
				],
			"MCMC": [
					{
						"name": "金針云耳蒸雞",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豆角肉片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸辣海帶絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "甘筍粟米龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "水煮肉片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "圓椒牛肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豆豉鯪魚炒南瓜",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "胡椒白蘿蔔豬骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "鹽焗雞翼",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒸水蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸菜炒花腩",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "木瓜干筍龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸甜咕嚕肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "韭菜炒蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "西蘭花炒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紫菜蛋花湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "糖醋魚塊",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "椰菜粉絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "西芹牛肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "冬瓜甘筍湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "梅菜扣肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "韭菜炒蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "枝竹炒肉片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "生熟地龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "清蒸排骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "菜花肉片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "麻婆豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "節瓜龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					}
				],
			"CKPC": [
					{
						"name": "番茄炒蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "青瓜蟹柳",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒜泥白肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "粟米肉餅",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "木瓜龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "麻婆豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "南乳藕片",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅燒豬踭",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "吉利豬扒",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "金針蒸雞",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "番茄蛋花湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "什菇肉絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "酸辣薯仔絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒜香骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豉汁蒸排骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "節瓜章魚龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "豆角炒牛肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅燒豆腐",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "果汁豬扒",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "香草焗龍利魚",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "榨菜蒸花肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "粟米忌廉湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蒸水蛋",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "椰菜粉絲",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "紅燒肉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "日式燒雞扒",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "剁椒蒸排骨",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "蘿蔔龍骨湯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "叉雞飯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "乾炒牛河",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "金菇肥牛飯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "燒鴨飯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "陳皮骨飯",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
					{
						"name": "肉醬意粉",
						"price": "0",
						"discount": "0",
						"available": 1,
					},
				],
		},
	},
	methods: {
		passRestAction: function(restaurant){
			this.selectedRestaurant = restaurant;
		},
		countBusyHourAction: function(){
//			console.log(this.bigdatas);
			if (data.restaurants){
				
			}
		}
	}
});

$(document).ready(function() {
	var _this = this;
    $.ajax({
        type: "GET",
        url: "https://api.data.umac.mo/service/student/student_meal_consumption/v1.0.0/all",
        headers: {
            Authorization: 'Bearer 645a5475-6021-33b6-a9b2-2a1be4b15771',
            Accept: 'application/json'
        },
        success: function(data) {
      		_this.bigdatas = data;
//			document.write(data);
			console.log(data);
			console.log(data._embedded);
      }
	}); 
});