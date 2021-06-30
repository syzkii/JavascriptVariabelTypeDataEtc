//if else statement
{
    let x = 50;

    if(x > 70) {
        console.log(x);
    } else {
        console.log("Nilai kurang dari 70");
    }

    /*
    Output:
    Nilai kurang dari 70
    */
}
{
    let language = "English";
    let greeting = "Selamat Pagi!"

    if(language === "English") {
        greeting = "Good Morning!";
    }

    console.log(greeting);

    /*
    Output:
    Good Morning!
    */
}
{
    let language = "French";
    let greeting = "Selamat Pagi"

    if(language === "English") {
        greeting = "Good Morning!";
    } else if(language === "French") {
        greeting = "Bonjour!"
    } else if(language === "Japanese") {
        greeting = "Ohayogozaimasu!"
    }

    console.log(greeting);
    /*
    Output:
    Bonjour!
    */
}