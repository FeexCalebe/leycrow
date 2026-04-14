const productsData = {
  jacket: {
    category: "DROP 001",
    title: "ASYMMETRIC ZIP JACKET",
    desc: "Sabe aquela sensação acolhedora de se trancar em um bunker enquanto investidores especulativos queimam o mundo lá fora? Nós transformamos isso em uma jaqueta. Com zíperes assimétricos perfeitamente inúteis e um corte que grita 'eu nunca irei preencher uma planilha na vida', essa peça é sua armadura pessoal contra herdeiros mimados e reuniões de conselho de acionistas.",
    fabric: "HEAVYWEIGHT JAPANESE TWILL",
    cut: "OVERSIZED BOXY",
    image: "/leycrow/assets/jacket.png"
  },
  hoodie: {
    category: "DROP 001",
    title: "STRUCTURED HOODIE",
    desc: "A peça definitiva para quem recusa ser fotografado no mesmo ambiente de diretores executivos com crise de meia-idade. O capuz foi modelado com uma angulação cirúrgica para esconder seu rosto das câmeras de reconhecimento facial compradas pelos mesmos bilionários da tecnologia que fingem se importar com você. O anonimato luxuoso nunca foi tão pesado.",
    fabric: "800GSM FRENCH TERRY",
    cut: "CROPPED ASTYMETRIC",
    image: "/leycrow/assets/hoodie.png"
  },
  cargo: {
    category: "DROP 001",
    title: "TACTICAL CARGO // 01",
    desc: "Por que se curvar à estética entediante e engessada de engravatados, quando você pode vestir a arquitetura do colapso? Construídas com tecido projetado para sobreviver a crises financeiras criadas por bancos, essas calças são ideais para carregar suas chaves, o peso do capitalismo tardio e o mais absoluto desprezo por quem ainda acredita no conto de fadas da meritocracia burguesa.",
    fabric: "MATTE RIPSTOP / COTTON",
    cut: "WIDE LEG DRAPE",
    image: "/leycrow/assets/cargo.png"
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const itemKey = urlParams.get('item');
  
  if (itemKey && productsData[itemKey]) {
    const data = productsData[itemKey];
    document.getElementById('dyn-category').textContent = data.category;
    document.getElementById('dyn-title').textContent = data.title;
    document.getElementById('dyn-desc').textContent = data.desc;
    document.getElementById('dyn-fabric').textContent = data.fabric;
    document.getElementById('dyn-cut').textContent = data.cut;
    document.getElementById('dynamic-product-img').style.backgroundImage = `url(${data.image})`;
  } else {
    // Falback if directly visited without params
    document.getElementById('dyn-title').textContent = "SELECT AN ITEM FROM ARCHIVE";
    document.getElementById('dynamic-product-img').style.backgroundColor = "#111";
  }
});
