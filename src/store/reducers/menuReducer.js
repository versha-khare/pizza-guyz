import * as actionTypes from '../actions/actionTypes'

const initialState = {
    menu: [
        {
            "items": [
                {
                    "desc": "Classic delight with 100% real mozzarella cheese",
                    "id": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122",
                    "name": "Margherita",
                    "price": 10
                },
                {
                    "desc": "Barbecue chicken for that extra zing",
                    "id": 2,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7",
                    "name": "Barbecue Chicken",
                    "price": 10
                },
                {
                    "desc": "Delightful combo of grilled mushroom & veggies",
                    "id": 3,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439",
                    "name": "Farmhouse",
                    "price": 13
                },
                {
                    "desc": "Supreme combo of 3 types of chicken",
                    "id": 4,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FNon_Veg_Supreme.webp?alt=media&token=6a4195fa-dbfd-419e-ac1b-3f1721c54bfa",
                    "name": "Non Veg Supreme",
                    "price": 15
                },
                {
                    "desc": "The awesome foursome with exotic veggies!",
                    "id": 5,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6",
                    "name": "Veggie Paradise",
                    "price": 13
                }
            ],
            "name": "Best Sellers"
        },
        {
            "items": [
                {
                    "desc": "Classic delight with 100% real mozzarella cheese",
                    "id": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122",
                    "name": "Margherita",
                    "price": 11
                },
                {
                    "desc": "Delightful combo of grilled mushroom & veggies",
                    "id": 3,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439",
                    "name": "Farmhouse",
                    "price": 17
                },
                {
                    "desc": "The awesome foursome with exotic veggies!",
                    "id": 5,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6",
                    "name": "Veggie Paradise",
                    "price": 17
                },
                {
                    "desc": "A delicacy prepared with golden corn",
                    "id": 6,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCheese_n_Corn.webp?alt=media&token=55ae0731-ffb6-42c4-ad61-3d1d735b04f1",
                    "name": "Cheese n Corn",
                    "price": 16
                },
                {
                    "desc": "Flavorful trio: paneer, capsicum, red paprika",
                    "id": 7,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPeppy_Paneer.webp?alt=media&token=feabb6f1-1121-47ee-9eac-494b7f49e3c3",
                    "name": "Peppy Paneer",
                    "price": 19
                }
            ],
            "name": "Veg Pizzas"
        },
        {
            "items": [
                {
                    "desc": "Barbecue chicken for that extra zing",
                    "id": 2,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7",
                    "name": "Barbecue Chicken",
                    "price": 11
                },
                {
                    "desc": "Supreme combo of 3 types of chicken",
                    "id": 4,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FNon_Veg_Supreme.webp?alt=media&token=6a4195fa-dbfd-419e-ac1b-3f1721c54bfa",
                    "name": "Non Veg Supreme",
                    "price": 19
                },
                {
                    "desc": "Beware! You'll be left craving for more",
                    "id": 8,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Dominator.webp?alt=media&token=e8b826db-cdc3-4b37-abf1-dc5d999850c9",
                    "name": "Chicken Dominator",
                    "price": 21
                },
                {
                    "desc": "Spicy, herbed chicken sausage on pizza",
                    "id": 9,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Sausage.webp?alt=media&token=e6943fcc-b821-46e0-9028-5623fe4db525",
                    "name": "Chicken Sausage",
                    "price": 13
                },
                {
                    "desc": "The wholesome flavour of tandoori masala",
                    "id": 10,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FIndian_Tandoori_Chicken_Tikka.webp?alt=media&token=c5f625a7-041c-4368-9f89-e6d3cd35dc5b",
                    "name": "Indi Chicken Tikka",
                    "price": 21
                },
                {
                    "desc": "Relish the delectable flavor of Chicken Pepperoni",
                    "id": 11,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPepperoni.webp?alt=media&token=a42a2b10-b651-44c1-a1ea-680987fd23d0",
                    "name": "Chicken Pepperoni",
                    "price": 19
                }
            ],
            "name": "Non Veg Pizzas"
        },
        {
            "items": [
                {
                    "desc": "An all-time fav! A Cheesy indulgence",
                    "id": 12,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCheesy.webp?alt=media&token=0a6d2a09-6661-4e15-b2d3-161e32d116ba",
                    "name": "Cheesy Dip",
                    "price": 2
                },
                {
                    "desc": "Hot crispy wavy masala coated fries",
                    "id": 13,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCrinkle_Fries.webp?alt=media&token=1b3bad75-67fa-4350-8027-98b2aec8bcbf",
                    "name": "Crinkle Fries",
                    "price": 4
                },
                {
                    "desc": " Your perfect pizza partner when paired with dip",
                    "id": 14,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FGarlic_bread.webp?alt=media&token=401111b2-370b-4413-b343-553e7bb437c7",
                    "name": "Garlic Breadsticks",
                    "price": 6
                },
                {
                    "desc": " Truly irresistible taco with non-veg patty",
                    "id": 15,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FTaco_Nvg.webp?alt=media&token=afb0085c-cacc-4141-87c9-e6cbf40dc208",
                    "name": "Non Veg Taco",
                    "price": 7
                },
                {
                    "desc": " Truly irresistible taco with veg patty",
                    "id": 16,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FTaco_Veg.webp?alt=media&token=2b7791de-415d-401b-b140-19a4932650b1",
                    "name": "Veg Taco",
                    "price": 9
                }
            ],
            "name": "Side Dishes"
        },
        {
            "items": [
                {
                    "desc": "Indulgent, gooey molten lava filled cake",
                    "id": 17,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChoco_Lava.webp?alt=media&token=fa50ccb3-7c4a-47bd-96d1-be67e367f79b",
                    "name": "Choco Lava Cake",
                    "price": 9
                },
                {
                    "desc": "Sweet temptation! Butterscotch mousse",
                    "id": 18,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FButterscotch.webp?alt=media&token=f84d2cfc-d17c-4dae-810c-d22af8b5e6ac",
                    "name": "Butterscotch Mousse",
                    "price": 6
                },
                {
                    "desc": "Cholcolate drizzeled Hot Chocolate Brownie",
                    "id": 19,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBrownie_Fantasy.webp?alt=media&token=61c7f537-b683-4a9b-b6fa-2a85ff35df6f",
                    "name": "Brownie Fantasy",
                    "price": 7
                }
            ],
            "name": "Desserts"
        }
    ],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.GET_MENU:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.GET_MENU_SUCCESS:
            return {
                ...state,
                menu: payload.menu,
                isLoading: false
            }

        case actionTypes.GET_MENU_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            }

        default:
            return state;
    }
}

export default reducer