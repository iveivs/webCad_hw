// fetch возвращает promise
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
.then(function(result){
    return result.json()
}).then(function(jsonData) {
    // console.log(`Курс доллара к рублю вчера ${jsonData.Valute.USD.Previous}`);
    // console.log(`Курс доллара к рублю сегодня ${jsonData.Valute.USD.Value}`);
}).catch(function(err){
    console.log(err);
})


// Приложение по выводу разницы курса валют
function getCurrencyValue(code, name) {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(function (result) {
            return result.json()
        }).then(function (jsonData) {
            const today = jsonData.Valute[code].Value
            const yesterday = jsonData.Valute[code].Previous
            console.log(`Сегодня курс ${name} к рублю равен ${today} `);
            console.log(`Вчера курс ${name} к рублю был равен ${yesterday} `);

            if(today > yesterday){
                const result = today - yesterday
                console.log(`Наблюдается повышение на ${result.toFixed(4)}`);
                console.log(' - - - - - - - - - - - -');
            } else if (today < yesterday){
                const result = yesterday - today
                console.log(`Наблюдается понижение на ${result.toFixed(4)}`);
                console.log(' - - - - - - - - - - - -');
            } else {
                console.log('курс был стабильный');
            }
        }).catch(function (err) {
            console.log(err);
})
}

getCurrencyValue('USD', 'доллар')
getCurrencyValue('EUR', 'евро')

// - - - - - - - - - - - - - - - -

// То же самое приложение, только через acync await
async function getCurrencyValue2(code, name) {

    try {
        const result = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")

        const jsonData = await result.json()

        const today = jsonData.Valute[code].Value

        const yesterday = jsonData.Valute[code].Previous
        console.log(`Сегодня курс ${name} к рублю равен ${today} `);
        console.log(`Вчера курс ${name} к рублю был равен ${yesterday} `);

        if (today > yesterday) {
            const res = today - yesterday
            console.log(`Наблюдается повышение на ${res.toFixed(4)}`);
        } else if (today < yesterday) {
            const res = yesterday - today
            console.log(`Наблюдается понижение на ${res.toFixed(4)}`);
        } else {
            console.log('курс был стабильный');
        }
        console.log(' - - - - - - - - - - - -');
        
    } catch (error) {
        console.log(error);
    }
    
}


getCurrencyValue2('USD', 'доллар')
getCurrencyValue2('EUR', 'евро')

