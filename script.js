    // let iPhone6s = Phone {
    //     brand: Apple,
    //     price: 360,
    //     color: white,
    //     isAvailable: false.
    // }
    // let SamsungS8 = Phone {
    //     brand: Samsung,
    //     price: 200,
    //     color: black,
    //     isAvailable: true.
    // }
    // let XiamomiMI = Phone {
    //     brand: Xiaomi,
    //     price: 10,
    //     color: invisible,
    //     isAvailable: false.
    // }
    // Czemu nie działają te wyżej??

    let iPhone6s = new Phone('Apple', 360, 'white', 'false');
    let SamsungS8 = new Phone('Samsung', 200, 'black', 'true');
    let XiamomiMI = new Phone('Xiaomi', 10, 'invisible', 'false');

    let isAvailable = function(param) {
        if(isAvailable === true) {
            return "Available";
        }
        else {
            return "Not Available";
        }
    };
    function Phone(brand, price, color, param){
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.param = param;
    };
    Phone.prototype.println = function(){
        console.log(`Phone brand is ${this.brand}, the color is ${this.color} and the price equals to ${this.price}$ and is ${this.param}`);
    };

iPhone6s.println();
SamsungS8.println();
XiamomiMI.println();