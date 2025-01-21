import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    isBlank: Schema.Attribute.Boolean;
    isShown: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutMessage extends Struct.ComponentSchema {
  collectionName: 'components_layout_messages';
  info: {
    displayName: 'message';
    icon: 'bullhorn';
  };
  attributes: {
    content: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.Component<'layout.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutMessageAlerte extends Struct.ComponentSchema {
  collectionName: 'components_layout_message_alertes';
  info: {
    displayName: 'Message Alerte';
  };
  attributes: {
    content: Schema.Attribute.String;
    isShown: Schema.Attribute.Boolean;
    link: Schema.Attribute.Component<'layout.link', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPerson extends Struct.ComponentSchema {
  collectionName: 'components_layout_people';
  info: {
    displayName: 'person';
    icon: 'user';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.RichText;
  };
}

export interface LayoutPodcast extends Struct.ComponentSchema {
  collectionName: 'components_layout_podcasts';
  info: {
    displayName: 'podcast';
    icon: 'microphone-alt';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LayoutRessources extends Struct.ComponentSchema {
  collectionName: 'components_layout_ressources';
  info: {
    displayName: 'Ressources';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutTexteAvecImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_texte_avec_images';
  info: {
    description: '';
    displayName: 'Texte avec image';
    icon: 'address-card';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageWidth: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    isPro: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isShown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    position: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    roundImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    textURL: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutVideoYoutube extends Struct.ComponentSchema {
  collectionName: 'components_layout_video_youtubes';
  info: {
    displayName: 'Vid\u00E9o Youtube';
    icon: 'play-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    isBottom: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isPro: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    isTop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    submenu: Schema.Attribute.Component<'menu.submenu', true>;
    target: Schema.Attribute.Enumeration<['self', 'blank']> &
      Schema.Attribute.DefaultTo<'self'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MenuSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_submenus';
  info: {
    displayName: 'Submenu';
    icon: 'bulletList';
  };
  attributes: {
    isPro: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    target: Schema.Attribute.Enumeration<['self', 'blank']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'self'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductCompteARebours extends Struct.ComponentSchema {
  collectionName: 'components_product_compte_a_rebours';
  info: {
    displayName: 'Compte \u00E0 rebours';
    icon: 'hourglass-half';
  };
  attributes: {
    deadline: Schema.Attribute.Date;
    showBeforeDays: Schema.Attribute.Integer;
    text: Schema.Attribute.String;
  };
}

export interface ProductContenus extends Struct.ComponentSchema {
  collectionName: 'components_product_contenus';
  info: {
    displayName: 'Contenus';
    icon: 'align-justify';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    pictos: Schema.Attribute.Component<'product.pictos', true>;
  };
}

export interface ProductPictos extends Struct.ComponentSchema {
  collectionName: 'components_product_pictos';
  info: {
    displayName: 'Pictos';
    icon: 'ad';
  };
  attributes: {
    firstLine: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    secondeLine: Schema.Attribute.String;
  };
}

export interface ProductProgram extends Struct.ComponentSchema {
  collectionName: 'components_product_programs';
  info: {
    displayName: 'program';
    icon: 'calendar-day';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductTemoignages extends Struct.ComponentSchema {
  collectionName: 'components_product_temoignages';
  info: {
    description: '';
    displayName: 'T\u00E9moignages';
    icon: 'address-card';
  };
  attributes: {
    atelier: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.link': LayoutLink;
      'layout.message': LayoutMessage;
      'layout.message-alerte': LayoutMessageAlerte;
      'layout.person': LayoutPerson;
      'layout.podcast': LayoutPodcast;
      'layout.ressources': LayoutRessources;
      'layout.texte-avec-image': LayoutTexteAvecImage;
      'layout.video-youtube': LayoutVideoYoutube;
      'menu.menu': MenuMenu;
      'menu.submenu': MenuSubmenu;
      'product.compte-a-rebours': ProductCompteARebours;
      'product.contenus': ProductContenus;
      'product.pictos': ProductPictos;
      'product.program': ProductProgram;
      'product.temoignages': ProductTemoignages;
    }
  }
}
