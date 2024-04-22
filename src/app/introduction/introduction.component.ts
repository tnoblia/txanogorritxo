import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  houseText:String = `Bienvenue à La Tarterie de Maixan, notre cocon gourmand. Nichée au cœur de la ville, Txanogorritxo est bien plus qu'une simple tarterie. C'est un refuge où les saveurs authentiques et les souvenirs se mêlent, créant une expérience unique pour chaque visiteur. Fondée sur la passion de la pâtisserie et le désir de partager des moments de bonheur, notre maison s'engage à offrir des tartes faites maison, préparées avec amour et les meilleurs ingrédients locaux.
  Dans notre espace chaleureux, chaque détail a été pensé pour vous faire sentir chez vous. Des meubles en rotin aux touches de rose, de kaki et de beige, notre décoration reflète l'esprit artisanal et l'atmosphère accueillante de notre tarterie. Chez Txanogorritxo, nous croyons que la simplicité et l'authenticité sont les clés du cœur.
  Notre menu, inspiré par les saisons et le terroir, célèbre la richesse des saveurs et la diversité des traditions culinaires. Que ce soit pour une pause douceur dans l'après-midi ou un moment convivial entre amis, notre sélection de tartes sucrées et salées promet de ravir vos papilles.
  Nous vous invitons à franchir la porte de Txanogorritxo, à vous installer confortablement et à découvrir le temps d'une tarte, le goût du partage et de la convivialité. Venez savourer l'instant, et laissez-vous transporter par l'ambiance apaisante et les délices de notre maison.
  Bienvenue chez vous, bienvenue à Txanogorritxo.`
  founderText:String = `Rencontre avec notre fondatrice, Maixan Noblia.
  Maixan n'est pas seulement la fondatrice de Txanogorritxo, elle en est l'âme. Avec un héritage familial riche en traditions culinaires, Maixan a toujours été fascinée par la magie de la pâtisserie. Sa passion pour les tartes, bien plus qu'une simple gourmandise, est une expression d'art et d'amour. Chez Txanogorritxo, chaque création est une invitation à découvrir des saveurs uniques et à partager des moments précieux.
  Chaque tarte est un voyage, un souvenir que nous partageons ensemble. Bienvenue dans notre petite tranche de bonheur.
  L'engagement de Maixan envers l'excellence et l'authenticité a établi Txanogorritxo comme un lieu de réconfort et de joie. Elle insiste sur l'utilisation d'ingrédients locaux de première qualité, assurant que chaque tarte raconte une histoire de qualité et de soin. « Mon objectif est simple, » explique Maixan, « créer un lieu où chaque client peut trouver un moment de bonheur et de sérénité. » Venez vivre l'expérience de Txanogorritxo, où l'art de la pâtisserie rencontre la chaleur de l'accueil, et découvrez un monde où chaque bouchée est un souvenir à chérir.`

  @ViewChild("HousePicColumn") housePicColumn!:ElementRef;
  @ViewChild("FounderPicColumn") founderPicColumn!:ElementRef;
  @ViewChild("FounderText") founderTextParagraph!:ElementRef;
  @ViewChild("HouseText") houseTextParagraph!:ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateTextHeight();
  }

  ngAfterViewInit(){
    this.updateTextHeight();
  }


  //When screen becomes wider, text height gets smaller and pics height get bigger
  //to avoid this, we adapt text size according to pics columns height
  updateTextHeight(){
    const heightHousePics = this.housePicColumn.nativeElement.offsetHeight;
    //const heightFounderPic = this.founderPicColumn.nativeElement.offsetHeight;
    let heightHouseText = this.houseTextParagraph.nativeElement.offsetHeight;
    //const heightFounderText = this.founderTextParagraph.nativeElement.offsetHeight;
    //const fontSizeFounderText = window.getComputedStyle(this.founderTextParagraph.nativeElement).fontSize;
    const fontSizeHouseText = window.getComputedStyle(this.houseTextParagraph.nativeElement).fontSize;

    console.log(heightHouseText,heightHousePics,fontSizeHouseText);

    let numberHouseFontSize:number = +fontSizeHouseText.replace("px","");
    while(heightHouseText<=heightHousePics){
      heightHouseText = this.houseTextParagraph.nativeElement.offsetHeight;
      this.renderer.setStyle(this.houseTextParagraph.nativeElement, 'fontSize', numberHouseFontSize+"px");
      numberHouseFontSize+=1;
    }
    while(heightHouseText>heightHousePics){
      heightHouseText = this.houseTextParagraph.nativeElement.offsetHeight;
      numberHouseFontSize-=1;
      this.renderer.setStyle(this.houseTextParagraph.nativeElement, 'fontSize', numberHouseFontSize+"px");
    }
  }
}
