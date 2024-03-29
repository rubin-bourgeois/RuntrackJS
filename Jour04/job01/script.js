document.getElementById('button').addEventListener('click', async function() {
    const reponse = await fetch('expression.txt'); 
    const contenu = await reponse.text();

    document.getElementById('expression').textContent = contenu;
});