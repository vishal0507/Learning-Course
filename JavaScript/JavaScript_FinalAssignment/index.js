
function CheckBook(book) {
    var test = /^[A-Za-z]+$/;
    var book_error = document.getElementById("book_error");
    if (book == "") {
        book_error.textContent = "Book should not be empty";
        return false;
    }
    else if (!test.test(book)) {
        book_error.innerText = "Numeric values not allowed";

        return false;

    }
    else if (book.length > 50) {
        book_error.textContent = "Book name length should not exceed 50";
        return false;
    }
    else {
        book_error.textContent = "";
        return true;
    }
}

function AuthorName(authorname) {
    var test = /^[A-Za-z]+$/;
    var author_error = document.getElementById("author_error");
    if (authorname == "") {
        author_error.textContent = "Author Name is Required";
        return false;
    }
    else if (!test.test(authorname)) {
        author_error.innerHTML = "Numeric values and Special Characters not allowed";
        return false;
    }

    else if (authorname.length > 50) {
        author_error.textContent = "Author name length should not exceed 50"
        return false;
    }
    else {
        author_error.textContent = "";
        return true;
    }

}

function AuthorMailCheck(authormail) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var authormail_error = document.getElementById("author_mail")
    if (authorname == "") {
        authormail_error.innerHTML = "Enter Mail ID";
        return false;
    }
    else if (!mailFormat.test(authormail)) {
        authormail_error.innerHTML = "Please enter valid Email Address"
        return false;
    }
    else {
        authormail_error.innerHTML = "";
        return true;
    }
}

function PublishedYearCheck(year) {
    var currentYear = new Date().getFullYear();
    var published_error = document.getElementById("published_error");
    if (!(year <= currentYear)) {

        published_error.innerHTML = "Please enter valid Published year"
        return false;
    }
    else {

        published_error.innerHTML = "";
        return true;
    }
}

function PriceCheck(price) {
    var numberFormat = /^[0-9]*$/;
    var price_error = document.getElementById("price_error");
    if (!numberFormat.test(price)) {
        price_error.innerHTML = "Alphabets values not allowed";
    }
    else {

        price_error.innerHTML = "";
        return true;
    }

}


const form = document.getElementById("form");
const bookname = document.getElementById("bookname");
const authormail = document.getElementById("authormail");
const authorname = document.getElementById("authorname");
const published = document.getElementById("published");
const price = document.getElementById("price");
const category = document.getElementById("category");

function Submit() {
    const bookNameValue = bookname.value.trim();
    const authorNameValue = authorname.value.trim();
    const authorMailValue = authormail.value.trim();
    const publishedValue = published.value.trim();
    const priceValue = price.value.trim();
    const categoryValue = category.value.trim();

    if(bookNameValue==="")
    {
        var book_error=document.getElementById("book_error")
        book_error.style.color="red";
        book_error.innerHTML="Please Enter Book Name"
    }
    if(authorNameValue==="")
    {
        var author_error=document.getElementById("author_error")
        author_error.style.color="red";
        author_error.innerHTML="Please Enter AuthorName"
    }
    if(authorMailValue==="")
    {
        var authorMail_error=document.getElementById("author_mail")
        authorMail_error.style.color="red";
        authorMail_error.innerHTML="Please Enter Author Mail"
    }
    if(publishedValue==="")
    {
        var published_error=document.getElementById("published_error")
        published_error.style.color="red";
        published_error.innerHTML="Please Enter Published Year"
    }
    if(priceValue==="")
    {
        var price_error=document.getElementById("price_error")
        price_error.style.color="red";
        price_error.innerHTML="Please Enter Price"
    }

    if(bookNameValue !="" && authorNameValue!="" && authorMailValue!="" && publishedValue!="" && priceValue!="")
    {
        StoreValues();
    }
   
}



function StoreValues()
{
    bookDetails={
        category:document.getElementById("category").value,
        bookname:document.getElementById("bookname").value,
        authorname:document.getElementById("authorname").value,
        authormail:document.getElementById("authormail").value,
        published:document.getElementById("published").value,
        price:document.getElementById("price").value,
        
    }
    alert("Submitted and you can view by clicking Show button")
}

function ShowData()
{
    var display=document.getElementById("showDatas");
    display.style.display="block";

    var bookShow=document.getElementById("bookShow");
    var category=document.getElementById("categoryId");
    var bookname=document.getElementById("bookId");
    var authormail=document.getElementById("authormailId");
    var authorname=document.getElementById("authorId");
    var published=document.getElementById("publishedId");
    var price =document.getElementById("priceId");


    bookShow.innerHTML=bookDetails.bookname;
    category.innerHTML=bookDetails.category;
    bookname.innerHTML=bookDetails.bookname;
    authormail.innerHTML=bookDetails.authormail;
    authorname.innerHTML=bookDetails.authorname;
    published.innerHTML=bookDetails.published;
    price.innerHTML=bookDetails.price;

}
