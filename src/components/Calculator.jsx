import React, {useEffect, useState,} from 'react'
import data from './data'

export default function Calculator() {
    const [selectValue, setSelectValue] = useState('Արարատ')
    const [selectCurrencyChange, setSelectCurrencyChange] = useState('USD')
    const [iWant, setIWant] = useState('EUR')
    const [firstInput, setFirstInput] = useState(1)
    const [secondInput, setSecondInput] = useState(516.5)

    const handleChange = (event) => {
        setSelectValue(event.target.value);
    }

    const changeCurrency = (event) => {
        setSelectCurrencyChange(event.target.value);
    }

    const changeCurrencyWant = (event) => {
        setIWant(event.target.value);
    }

    const changeFirstInput = (event) => {
        setFirstInput(event.target.value);
        currencyValue(event.target.value)
    }

    const changeSecondInput = (event) => {
        setSecondInput(event.target.value);
        currencyValue(event.target.value, "input2")
    }

    const currencyValue = (e, l) => {
        console.log(selectValue, selectCurrencyChange, iWant, firstInput, secondInput)
        if (selectCurrencyChange === iWant) {
            setFirstInput(e || firstInput)
            setSecondInput(e || firstInput)
        } else {
            for (let i = 0; i < data.length; i++) {
                // debugger
                if (data[i].bankName === selectValue) {
                    setSecondInput(firstInput * data[i].currency[selectCurrencyChange][0] / data[i].currency[iWant][1])
                }
            }
        }
    }

    useEffect(() => {
        currencyValue()
    }, [selectValue, selectCurrencyChange, iWant, firstInput, secondInput, currencyValue])

    return (
        <>
            <div>
                <select value={selectValue} onChange={handleChange}>
                    <option value="Արարատ">Արարատ</option>
                    <option value="Ինեկոբանկ">Ինեկոբանկ</option>
                    <option value="Ամերիա">Ամերիա</option>
                </select>
            </div>
            <div>
                <select value={selectCurrencyChange} onChange={changeCurrency}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUR">RUR</option>
                    <option value="GBP">GBP</option>
                    {/*<option value="AMD">AMD</option>*/}
                </select>
                <input type="number" min={0} value={firstInput} onChange={changeFirstInput}/>
            </div>
            <div>
                <select value={iWant} onChange={changeCurrencyWant}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUR">RUR</option>
                    <option value="GBP">GBP</option>
                    {/*<option value="AMD">AMD</option>*/}
                </select>
                <input type="number" min={0} value={secondInput} onChange={changeSecondInput}/>
            </div>
        </>
    )
}