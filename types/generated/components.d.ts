import type { Attribute, Schema } from '@strapi/strapi';

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    isBlank: Attribute.Boolean;
    isShown: Attribute.Boolean;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutMessage extends Schema.Component {
  collectionName: 'components_layout_messages';
  info: {
    displayName: 'message';
    icon: 'bullhorn';
  };
  attributes: {
    content: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.Component<'layout.link', true>;
    title: Attribute.String;
  };
}

export interface LayoutMessageAlerte extends Schema.Component {
  collectionName: 'components_layout_message_alertes';
  info: {
    displayName: 'Message Alerte';
  };
  attributes: {
    content: Attribute.String;
    isShown: Attribute.Boolean;
    link: Attribute.Component<'layout.link'>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface LayoutPerson extends Schema.Component {
  collectionName: 'components_layout_people';
  info: {
    displayName: 'person';
    icon: 'user';
  };
  attributes: {
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
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
    anchor: Attribute.String;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface LayoutRessources extends Schema.Component {
  collectionName: 'components_layout_ressources';
  info: {
    displayName: 'Ressources';
    icon: 'book';
  };
  attributes: {
    content: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutTexteAvecImage extends Schema.Component {
  collectionName: 'components_layout_texte_avec_images';
  info: {
    description: '';
    displayName: 'Texte avec image';
    icon: 'address-card';
  };
  attributes: {
    content: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageWidth: Attribute.Integer & Attribute.DefaultTo<3>;
    isPro: Attribute.Boolean & Attribute.DefaultTo<false>;
    isShown: Attribute.Boolean & Attribute.DefaultTo<true>;
    position: Attribute.Enumeration<['left', 'right', 'center']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    roundImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    textURL: Attribute.String;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutVideoYoutube extends Schema.Component {
  collectionName: 'components_layout_video_youtubes';
  info: {
    displayName: 'Vid\u00E9o Youtube';
    icon: 'play-circle';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProductCompteARebours extends Schema.Component {
  collectionName: 'components_product_compte_a_rebours';
  info: {
    displayName: 'Compte \u00E0 rebours';
    icon: 'hourglass-half';
  };
  attributes: {
    deadline: Attribute.Date;
    showBeforeDays: Attribute.Integer;
    text: Attribute.String;
  };
}

export interface ProductContenus extends Schema.Component {
  collectionName: 'components_product_contenus';
  info: {
    displayName: 'Contenus';
    icon: 'align-justify';
  };
  attributes: {
    content: Attribute.RichText;
    pictos: Attribute.Component<'product.pictos', true>;
  };
}

export interface ProductPictos extends Schema.Component {
  collectionName: 'components_product_pictos';
  info: {
    displayName: 'Pictos';
    icon: 'ad';
  };
  attributes: {
    firstLine: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
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
    content: Attribute.RichText;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ProductTemoignages extends Schema.Component {
  collectionName: 'components_product_temoignages';
  info: {
    description: '';
    displayName: 'T\u00E9moignages';
    icon: 'address-card';
  };
  attributes: {
    atelier: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.link': LayoutLink;
      'layout.message': LayoutMessage;
      'layout.message-alerte': LayoutMessageAlerte;
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
