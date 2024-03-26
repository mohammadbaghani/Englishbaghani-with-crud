import React, { Component } from 'react'
import Product from '../Product/Product'
import CartProduct from '../CartProduct/CartProduct'
import Form from 'react-bootstrap/Form';
import './Shop.css'
import swal from "sweetalert";

export default class Shop extends Component {


    constructor(props) {
        super(props)
        this.state = {

            count: 0,

            actresses: [
                { imgactress: 'images/4/3.jpg' },
                { imgactress: 'images/4/5.jpg' },
                { imgactress: 'images/4/7.jpeg' },

            ],
            products: [
                { actress: 'c', id: 9, desc: 'امیلی بلانت', price: " 120", img: 'images/3/quiet_place_part_ii_ver6.jpg', title: 'مکان خلوت ' },

                { actress: 'c', id: 1, desc: ' امیلی بلانت', price: "300", img: 'images/3/jungle_cruise_ver3.jpg', title: 'گشت‌وگذار در جنگل' },

                { actress: 'j', id: 5, desc: ' جنیفیر لورنس ', price: "90", img: 'images/2/mother_ver3.jpg', title: 'مادر' },

                { actress: 'j', id: 8, desc: ' جنیفیر لورنس ', price: "120", img: 'images/2/no_hard_feelings.jpg', title: 'بدون احساس ناراحتی' },
                { actress: 'e', id: 7, desc: ' امااستون ', price: "70", img: 'images/1/help_ver3.jpg', title: 'کمک ' },
                { actress: 'e', id: 4, desc: ' امااستون ', price: "80", img: 'images/1/crazy_stupid_love_ver3.jpg', title: 'دیوانه,احمق,عاشق' },
                { actress: 'e', id: 3, desc: ' امااستون ', price: "60", img: 'images/1/house_bunny_ver2.jpg', title: 'خرگوش خانه ' },
                { actress: 'j', id: 6, desc: 'جنیفیر لورنس ', price: " 50", img: 'images/2/joy_ver2.jpg', title: 'جوی' },

                {
                    actress: 'c', id: 2, desc: ' امیلی بلانت', price: "20", img: 'images/3/edge_of_tomorrow_ver5.jpg', title:
                        'لبه فردا'

                },
                { actress: 'j', id: 10, desc: ' جنیفیر لورنس ', price: "120", img: 'images/2/no_hard_feelings.jpg', title: 'بدون احساس ناراحتی' },
                { actress: 'c', id: 11, desc: ' امیلی بلانت', price: "300", img: 'images/3/jungle_cruise_ver3.jpg', title: 'گشت‌وگذار در جنگل' },
                { actress: 'e', id: 12, desc: ' امااستون ', price: "60", img: 'images/1/house_bunny_ver2.jpg', title: 'خرگوش خانه ' },
            ],
            shoppingCart: [],
            filterCoffee: [],
        }
    }

    addProductToCart(d) {

        let ma = this.state.shoppingCart.find(product => {
            return product.id === d
        })

        if (ma) {

            swal({
                title: 'این محصول در سبد خرید شما موجود است !',
                icon: "error",
                buttons: " باشه !",
            })


        }
        else {
            let mainProduct = this.state.products.find(product => {
                return product.id === d
            })
            this.setState(prevState => {
                return {
                    shoppingCart: [...prevState.shoppingCart, mainProduct]
                }
            })

            this.setState(prevState => {
                return {
                    count: this.state.count + 1

                }
            })
        }
    }

    emptyShoppingCart() {
        this.setState(prevState => {
            return {
                count: 0

            }
        })
        this.setState({
            shoppingCart: []
        })
    }


    removeProductFromCart(productId) {
        this.setState(prevState => {
            return {
                count: this.state.count - 1

            }
        })

        let newShoppingCart = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })

        this.setState({
            shoppingCart: newShoppingCart
        })
    }


    all(d) {



        this.setState({
            filterCoffee: this.state.products
        })
    }





    onFilterj(d) {

        let filteredj = this.state.products.filter(product => {
            return product.actress === 'j'
        })

        this.setState({
            filterCoffee: filteredj
        })
    }

    onFilterc(d) {

        let filteredc = this.state.products.filter(product => {
            return product.actress === 'c'
        })

        this.setState({
            filterCoffee: filteredc
        })
    }



    onFiltere(d) {

        let filterede = this.state.products.filter(product => {
            return product.actress === 'e'
        })

        this.setState({
            filterCoffee: filterede
        })
    }


    componentDidMount() {
        this.setState({
            filterCoffee: this.state.products
        })
    }

    render() { 
        const scrollToTop = () => {

            window.scrollTo({ top: 2560, left: 0, behavior: 'smooth' });



        }; const scrollToTopfilm = () => {

            window.scrollTo({ top: 430, left: 0, behavior: 'smooth' });



        };

        return (






            <div className='shop-body'>

                <p onClick={scrollToTop} className='shop-list'>
                <img class="listimage" src="list.png" />
                    لیست خریدها
                </p>
                <p onClick={scrollToTopfilm} className='shop-list films'>
                <img class="listimage" src="list.png" />
                    لیست فیلم ها
                </p>
                <figure className='shop-count'>
                    <img class="shop-count-image" src="cart.png" />

                    سبد خرید
                    <span className='shop-count-count' >

                        {this.state.count}

                    </span>





                </figure>

                <header class=" zz">



                    <h1 class="band-name-large-animation">فروش  فیلم های انگلیسی   </h1>

                </header>





                <div className='valed-parent-filters'  >

                    <h1 class="bottom-text">فیلتر بر اساس بازیگران
                    <img className='filterimage' src="imagess.png" />
                    </h1>

                    {['radio'].map((type) => (



                        <div key={`reverse-${type}`} className="parent-filters">


                            <Form.Check onClick={this.all.bind(this)} className='formcheck-shop'
                                reverse
                                name="group1"
                                label="همه"
                                type={type}
                                id={`reverse-${type}-4`}
                            />



                            <Form.Check className='formcheck-shop' onClick={this.onFilterj.bind(this)}
                                reverse
                                label=" جنیفیر لورنس"
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <Form.Check className='formcheck-shop' onClick={this.onFilterc.bind(this)}
                                reverse
                                label="اما استون"

                                name="group1"
                                type={type}
                                id={`reverse-${type}-2`}
                            />
                            <Form.Check onClick={this.onFiltere.bind(this)} className='formcheck-shop'
                                reverse
                                name="group1"
                                label="امیلی بلانت"
                                type={type}
                                id={`reverse-${type}-3`}
                            />


                        </div>

                    ))}
                </div>


                <div className='valed-parent-actressimage'  >


                    <div className='parent-actressimage' >
                        <button class="btn-actressone" type="button" onClick={this.onFilterj.bind(this)}>
                  
                        </button>
                        <img className='actressimage' src={this.state.actresses[2].imgactress} />
                    </div>
                    <div className='parent-actressimage' >

                        <button class="btn-actressthree emily" type="button" onClick={this.onFilterc.bind(this)}>

                  
                        </button>
                        <img className='actressimage' src={this.state.actresses[0].imgactress} />

                    </div>
                    <div className='parent-actressimage' >

                        <button class="btn-actresstow" type="button" onClick={this.onFiltere.bind(this)}>

                        </button> <img className='actressimage' src={this.state.actresses[1].imgactress} />
                    </div>
                </div>





                <div class="animation-items">

                    {this.state.filterCoffee.map(product => (
                        <Product {...product} onFilterj={this.onFilterj.bind(this)}
                            onFiltere={this.onFiltere.bind(this)}

                            onFilterc={this.onFilterc.bind(this)} onAddProduct={this.addProductToCart.bind(this)} />
                    ))}
                </div>

                <div class="cart-row row-tow">
                    <span class="cart-header cart-column">نام محصول</span>
                    <span class="cart-header cart-column">هزینه</span>
                    <span class="cart-header cart-column">حذف از سبد</span>
                </div>


                <div class="cart-items ">

                    {this.state.shoppingCart.map(product => (

                        <CartProduct {...product} onRemove={this.removeProductFromCart.bind(this)} />



                    ))}
                </div>
                <div class=" btn-parent-orig" >


                    <button class=" btn-purchase" type="button" onClick={this.emptyShoppingCart.bind(this)}>
                        حذف همه
                    </button>
                </div>
            </div>
        )
    }
}