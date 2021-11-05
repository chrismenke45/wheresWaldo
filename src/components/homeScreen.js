const homeScreen = () => {
    const div = document.createElement('div');
    div.id = 'home'

    /*
    div.style.width = '60%'
    div.style.textAlign = 'center'
    div.style.margin = '30px auto auto auto'
    */
    
    let img = document.createElement('img');
    img.src = './images/pikachu.png'
    img.height = '225'
    img.width = '400'
    div.appendChild(img)

    let title = document.createElement('h3');
    title.innerHTML = "Welcome to \"Where's that Pok&#233mon?\""
    let p = document.createElement('p');
    p.innerHTML = "It's just like \"Where's Waldo?\", but with Pok&#233mon.  Each Level has 3 unique Pok&#233mon to find.  Submit your time and check your score and see how fast you are compared to others! <strong>Make sure to WIDEN your browser window and scroll to see the whole page.</strong>" 
    div.appendChild(title)
    div.appendChild(p)

    let main = document.getElementById('main');
    main.appendChild(div)
}
export default homeScreen;