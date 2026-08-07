import type { Schema, Struct } from '@strapi/strapi';

export interface CriterionCriterion extends Struct.ComponentSchema {
  collectionName: 'components_criterion_criteria';
  info: {
    displayName: 'criterion';
    icon: 'bulletList';
  };
  attributes: {
    Description: Schema.Attribute.String;
    filter_tag: Schema.Attribute.Relation<
      'oneToOne',
      'api::filter-tag.filter-tag'
    >;
    rating: Schema.Attribute.Relation<'oneToOne', 'api::option.option'>;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'criterion.criterion': CriterionCriterion;
      'link.link': LinkLink;
    }
  }
}
