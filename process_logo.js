import * as JimpPackage from 'jimp';
const Jimp = JimpPackage.default || JimpPackage;

async function processImage() {
  try {
    const image = await Jimp.read('public/assets/logo.png');
    
    // Ler todos os pixels: Transformar fundo branco em transparente e linhas pretas em branco
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      const brightness = (red + green + blue) / 3;
      
      if (brightness > 200) {
        // Se for claro (fundo branco), fica totalmente transparente
        this.bitmap.data[idx + 3] = 0; 
      } else {
        // Se for escuro (desenho preto), vira totalmente branco
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
        // Preserva bordas suaves com anti-aliasing
        this.bitmap.data[idx + 3] = 255 - brightness;
      }
    });

    await image.writeAsync('public/assets/logo_transparent.png');
    console.log("Logo processado com sucesso!");
  } catch(e) {
    console.error(e);
  }
}

processImage();
