import { Injectable } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { Commments } from '../../models/commments.model';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  series: Serie[];
  commments: Commments[];

  constructor() {
    this.series = [];
    this.commments = [];

    this.series.push(
      new Serie(
        'MR.Robot',
        '2015',
        4,
        "Elliot est un jeune programmeur anti-social qui souffre d'un trouble du comportement qui le pousse à croire qu'il ne peut rencontrer des gens qu'en les hackant. Il travaille pour une firme spécialisée dans la cyber-sécurité mais un homme connu sous le nom de Mr Robot l'approche un jour pour faire tomber une compagnie surpuissante qui fait partie de celles qu'il doit justement protéger...",
        'https://m.media-amazon.com/images/I/71lt3qJde5L._AC_SY606_.jpg',
        'Le scénario mis au point par Esmail a ceci d’exceptionnel qu’il n’est pas rythmé par des rebondissements mais par de brusques changements de direction. La question est moins celle de la surprise marquant la fin d’une séquence narrative que l’ouverture d’une perspective qui oblige, chaque fois, le spectateur à échafauder de nouvelles hypothèses.',
        [
          new Commments(1, new Date(), "L'info Tout Court", 'Très bien.'),
          new Commments(
            1,
            new Date(),
            "L'info Tout Court",
            'Vraiment très bien.'
          ),
        ],
        1
      ),
      new Serie(
        'Arcane',
        '2021',
        1,
        'Championnes de leurs villes jumelles et rivales (la huppée Piltover et la sous-terraine Zaun), deux sœurs Vi et Powder se battent dans une guerre où font rage des technologies magiques et des perspectives diamétralement opposées.',
        'https://fr.web.img6.acsta.net/pictures/21/11/02/11/12/2878509.jpg',
        "L''écriture est soignée, le montage au service d'une mise en scène intelligente qui déroule son récit à multicouche à un rythme idéal. (...) Arcane est instantanément devenu un classique de l'animation qui met à l'amende les 3/4 des studios d'animation par une prise de risque esthétique donnant à son récit une étincelle unique en son genre, c'est beau, fort et poignant, jamais gratuit et toujours bien fait. C'est à se demander comment une oeuvre pareille peut exister, ça touche au sublime.",
        [
          new Commments(1, new Date(), "L'info Tout Court", 'Très bien.'),
          new Commments(
            1,
            new Date(),
            "L'info Tout Court",
            'Vraiment très bien.'
          ),
        ],
        2
      ),
      new Serie(
        'Cobra Kaï',
        '2018',
        5,
        'Une suite de "Karaté Kid" se déroulant de nos jours, plus de trois décennies après les événements du film. Johnny, qui cherche la rédemption, rouvre le dojo Cobra Kai et relance sa rivalité avec Daniel. Les deux hommes vont être confrontés aux démons du passé et aux frustrations du présent.',
        'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2021/12/cobra-kai-affiche.jpg',
        "Cette série c'est comme mon neveu. Pas très doué, pense tout bien faire et vraiment adorable au point qu'on lui pardonnerait tout et qu'on pourrait regarder ses bêtises à longueur de journées et en redemander! Oui cette série a un côté Série B (assume) les cliffhanger sont souvent poussif, les personnages quelque peu manichéen (quoi que...). Mais l'ensemble est tellement cohérent qu'on dévore chaque saison à une vitesse folle. Team Eagle Fang.",
        [
          new Commments(1, new Date(), "L'info Tout Court", 'Très bien.'),
          new Commments(
            1,
            new Date(),
            "L'info Tout Court",
            'Vraiment très bien.'
          ),
        ],
        3
      ),
      new Serie(
        'Rick & Morty',
        '2014',
        5,
        "Un brillant inventeur et son petit fils un peu à l'Ouest partent à l'aventure...",
        'https://fr.web.img6.acsta.net/pictures/18/10/31/17/34/2348073.jpg',
        "L'animation, supervisée par le directeur artistique James McDermott, est fraîche, colorée et aussi farfelue que le scénario.",
        [
          new Commments(1, new Date(), "L'info Tout Court", 'Très bien.'),
          new Commments(
            1,
            new Date(),
            "L'info Tout Court",
            'Vraiment très bien.'
          ),
        ],
        4
      ),
      new Serie(
        'The Boys',
        '2019',
        3,
        "Dans un monde fictif où les super-héros se sont laissés corrompre par la célébrité et la gloire et ont peu à peu révélé la part sombre de leur personnalité, une équipe de justiciers qui se fait appeler 'The Boys' décide de passer à l'action et d'abattre ces super-héros autrefois appréciés de tous.",
        'https://www.francetvinfo.fr/pictures/voQNpY9WJjL8u4ujK5RvIXh3_q0/fit-in/720x/2020/08/31/phpeRWMrI.jpg',
        "Le charme de The Boys opère à plusieurs niveaux  (...). Mais où l'équipe de scénaristes excelle vraiment, c'est dans la construction de l'univers. Ils ont gardé intacts l'essentiel de l’histoire de la bande dessinée tout en (...) la plaçant dans un décor à la fois amélioré et parfaitement 2019.",
        [
          new Commments(1, new Date(), "L'info Tout Court", 'Très bien.'),
          new Commments(
            1,
            new Date(),
            "L'info Tout Court",
            'Vraiment très bien.'
          ),
        ],
        5
      )
    );
  }

  //Function to find the id

  findById(serieId: number): Promise<Serie> {
    return new Promise<Serie>((res, rej) => {
      for (let serie of this.series) {
        if (serie.id === serieId) {
          res(serie);
          break;
        }
      }
    });
  }

  /*
    CRUD Create Read Update Delete
    */

  // Function to add a serie

  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      serieToAdd.id = this.series[this.series.length - 1].id + 1;
      this.series.push(serieToAdd);
      res();
    });
  }

  // Function to add comments

  addComment(comment: Commments, serie: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      comment.id = serie.commments[serie.commments.length - 1].id + 1;
      serie.commments.push(comment);
      res();
    });
  }

  // Function to edit the selected serie

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        if (serie.id === editedSerie.id) {
          this.series[index] = editedSerie;
          res();
          break;
        }
      }
    });
  }

  // Function to delete the selected serie

  deleteSerie(serieToDelete: number): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, serie] of this.series.entries()) {
        if (serie.id === serieToDelete) {
          this.series.splice(index, 1);
          res();
          break;
        }
      }
    });
  }
}
