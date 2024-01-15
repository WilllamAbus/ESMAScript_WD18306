
document.addEventListener('DOMContentLoaded', function () {
    let Entity = function (name, delay) {
        this.name = name;
        this.delay = delay;
    }

    Entity.prototype.greet = function () {
        setTimeout(() => {
            let outputDiv = document.getElementById('output');
           
            // Sử dụng arrow function để tránh vấn đề về ngữ cảnh (this)
            const convertTemperature = (temperature, unit) => {
                if (unit === "C") {
                    return (temperature * 9 / 5) + 32;
                } else if (unit === "F") {
                    return (temperature - 32) * 5 / 9;
                } else {
                    throw new Error("Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.");
                }
            };

            // Ví dụ sử dụng convertTemperature trong greet
            const celsiusTemperature = 37;
            const convertedToFahrenheit = convertTemperature(celsiusTemperature, "C");
            outputDiv.innerHTML += 'Xin chào, tên tôi là ' + this.name + '. Nhiệt độ Celsius là ' + celsiusTemperature +
                ', chuyển đổi sang Fahrenheit là ' + convertedToFahrenheit + '<br>';

            const faraTemperature = 180;
            const convertedToCelius = convertTemperature(celsiusTemperature, "F");
            outputDiv.innerHTML += 'Xin chào, tên tôi là ' + this.name + '. Nhiệt độ Farahein là ' + faraTemperature +
                ', chuyển đổi sang Celius là ' +  convertedToCelius.toFixed(3) + '<br>';
        }, this.delay);
    }

    let temperature = new Entity('Temper', 30);


    temperature.greet();
  
});
