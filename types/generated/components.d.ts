import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    isBlank: Attribute.Boolean;
    isShown: Attribute.Boolean;
  };
}

export interface LayoutMessageAlerte extends Schema.Component {
  collectionName: 'components_layout_message_alertes';
  info: {
    displayName: 'Message Alerte';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
    logo: Attribute.Media;
    isShown: Attribute.Boolean;
    link: Attribute.Component<'layout.link'>;
  };
}

export interface LayoutMessage extends Schema.Component {
  collectionName: 'components_layout_messages';
  info: {
    displayName: 'message';
    icon: 'bullhorn';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
    link: Attribute.Component<'layout.link', true>;
    image: Attribute.Media;
  };
}

export interface LayoutPerson extends Schema.Component {
  collectionName: 'components_layout_people';
  info: {
    displayName: 'person';
    icon: 'user';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.RichText;
    url: Attribute.RichText;
  };
}

export interface LayoutPodcast extends Schema.Component {
  collectionName: 'components_layout_podcasts';
  info: {
    displayName: 'podcast';
    icon: 'microphone-alt';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    anchor: Attribute.String;
  };
}

export interface LayoutRessources extends Schema.Component {
  collectionName: 'components_layout_ressources';
  info: {
    displayName: 'Ressources';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
    logo: Attribute.Media;
    url: Attribute.String;
  };
}

export interface LayoutTexteAvecImage extends Schema.Component {
  collectionName: 'components_layout_texte_avec_images';
  info: {
    displayName: 'Texte avec image';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.Media;
    position: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    textURL: Attribute.String;
    url: Attribute.String;
    roundImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    imageWidth: Attribute.Integer & Attribute.DefaultTo<3>;
    isShown: Attribute.Boolean & Attribute.DefaultTo<true>;
    isPro: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutVideoYoutube extends Schema.Component {
  collectionName: 'components_layout_video_youtubes';
  info: {
    displayName: 'Vid\u00E9o Youtube';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ProductCompteARebours extends Schema.Component {
  collectionName: 'components_product_compte_a_rebours';
  info: {
    displayName: 'Compte \u00E0 rebours';
    icon: 'hourglass-half';
  };
  attributes: {
    text: Attribute.String;
    deadline: Attribute.Date;
    showBeforeDays: Attribute.Integer;
  };
}

export interface ProductContenus extends Schema.Component {
  collectionName: 'components_product_contenus';
  info: {
    displayName: 'Contenus';
    icon: 'align-justify';
  };
  attributes: {
    pictos: Attribute.Component<'product.pictos', true>;
    content: Attribute.RichText;
  };
}

export interface ProductPictos extends Schema.Component {
  collectionName: 'components_product_pictos';
  info: {
    displayName: 'Pictos';
    icon: 'ad';
  };
  attributes: {
    image: Attribute.Media;
    firstLine: Attribute.String;
    secondeLine: Attribute.String;
  };
}

export interface ProductProgram extends Schema.Component {
  collectionName: 'components_product_programs';
  info: {
    displayName: 'program';
    icon: 'calendar-day';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
  };
}

export interface ProductTemoignages extends Schema.Component {
  collectionName: 'components_product_temoignages';
  info: {
    displayName: 'T\u00E9moignages';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    atelier: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'layout.link': LayoutLink;
      'layout.message-alerte': LayoutMessageAlerte;
      'layout.message': LayoutMessage;
      'layout.person': LayoutPerson;
      'layout.podcast': LayoutPodcast;
      'layout.ressources': LayoutRessources;
      'layout.texte-avec-image': LayoutTexteAvecImage;
      'layout.video-youtube': LayoutVideoYoutube;
      'product.compte-a-rebours': ProductCompteARebours;
      'product.contenus': ProductContenus;
      'product.pictos': ProductPictos;
      'product.program': ProductProgram;
      'product.temoignages': ProductTemoignages;
    }
  }
}
