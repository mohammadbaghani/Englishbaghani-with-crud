import React from "react";
import "./Ticket.css";


export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: [" تقویت مکالمه", "دوره فشرده جتینو", " دوره آنلاین", " دوره حضوری"],
                Turkey: ["ویژه نوجوانان", "ویژه کودکان", " دوره آنلاین", " دوره حضوری"],
                US: ["آمادگی آزمون تافل", "TTC دوره", "آمادگی آزمون آیلتس", " زبان برای مهاجرت"],
            },
            mainCountryCities: []
        }

        this.selectHandler = this.selectHandler.bind(this)
    }

    selectHandler(event) {
        let mainCountry = event.target.value

        if (mainCountry === '-1') {
            this.setState({
                mainCountryCities: []
            })
        } else {
            let mainCountryCities = this.state.countriesData[mainCountry]

            this.setState({
                mainCountryCities: mainCountryCities
            })
        }

    }
    render() {
        return (
            <>

                <div className="container-select">
                    <div className="container-select-child">
                    <header className='copy'>
             دوره آموزشی مد نظر خود را انتخاب نمایید 
             
            </header>






                        <select className="countrySelect" onChange={this.selectHandler}>
                       
                            <option className="option" value="-1">انتخاب گروه آموزشی </option>
                            <option className="option" value="Iran">بزرگسالان</option>
                            <option className="option" value="Turkey">کودکان</option>
                            <option className="option" value="US">پیشرفته</option>
                        </select>



                        <select className="citySelect move-select">
                     
                            {this.state.mainCountryCities.length ? this.state.mainCountryCities.map(city => (
                                <option value={city} key={city} className="option">{city}</option>
                            )) : (
                                <option value="-1" className="citySelect  option">لیست دوره ها</option>
                            )}
                        </select>




                    </div>
                </div>
            </>
        )
    }
}

