// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface FooterDocumentData {}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | FAskedQuestionsSlice
  | CarouselSlice
  | FeaturedPhotosSlice
  | ProductDesignSlice
  | FeaturesSlice
  | PhotosGridSlice
  | HeroSlice
  | TextSlice
  | ImageSlice
  | ImageCardsSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  parent: prismic.ContentRelationshipField<"page">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → CTA Links*
 */
export interface SettingsDocumentDataCtaLinksItem {
  /**
   * label field in *Settings → CTA Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * link field in *Settings → CTA Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * CTA Links field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta_links: prismic.GroupField<Simplify<SettingsDocumentDataCtaLinksItem>>;

  /**
   * anpc sol field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.anpc_sol
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  anpc_sol: prismic.ImageField<never>;

  /**
   * anpc sol link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.anpc_sol_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  anpc_sol_link: prismic.LinkField;

  /**
   * anpc sal field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.anpc_sal
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  anpc_sal: prismic.ImageField<never>;

  /**
   * anpc sal link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.anpc_sal_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  anpc_sal_link: prismic.LinkField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument;

/**
 * Item in *Carousel → Default → Primary → photos*
 */
export interface CarouselSliceDefaultPrimaryPhotosItem {
  /**
   * Image field in *Carousel → Default → Primary → photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.photos[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Image Link field in *Carousel → Default → Primary → photos*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.photos[].image_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  image_link: prismic.LinkToMediaField;
}

/**
 * Primary content in *Carousel → Default → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * photos field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: carousel.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<CarouselSliceDefaultPrimaryPhotosItem>>;
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault;

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  "carousel",
  CarouselSliceVariation
>;

/**
 * Item in *FAskedQuestions → Default → Primary → items*
 */
export interface FAskedQuestionsSliceDefaultPrimaryItemsItem {
  /**
   * Q Title field in *FAskedQuestions → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.items[].q_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  q_title: prismic.RichTextField;

  /**
   * Q Answer field in *FAskedQuestions → Default → Primary → items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.items[].q_answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  q_answer: prismic.RichTextField;
}

/**
 * Primary content in *FAskedQuestions → Default → Primary*
 */
export interface FAskedQuestionsSliceDefaultPrimary {
  /**
   * Contact Link field in *FAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.contact_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  contact_link: prismic.LinkField;

  /**
   * Contact Label field in *FAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.contact_label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_label: prismic.RichTextField;

  /**
   * Title field in *FAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *FAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * items field in *FAskedQuestions → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: f_asked_questions.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<FAskedQuestionsSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for FAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FAskedQuestionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FAskedQuestionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FAskedQuestions*
 */
type FAskedQuestionsSliceVariation = FAskedQuestionsSliceDefault;

/**
 * FAskedQuestions Shared Slice
 *
 * - **API ID**: `f_asked_questions`
 * - **Description**: FAskedQuestions
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FAskedQuestionsSlice = prismic.SharedSlice<
  "f_asked_questions",
  FAskedQuestionsSliceVariation
>;

/**
 * Item in *FeaturedPhotos → Default → Primary → photos*
 */
export interface FeaturedPhotosSliceDefaultPrimaryPhotosItem {
  /**
   * Image field in *FeaturedPhotos → Default → Primary → photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_photos.default.primary.photos[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *FeaturedPhotos → Default → Primary*
 */
export interface FeaturedPhotosSliceDefaultPrimary {
  /**
   * Title field in *FeaturedPhotos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_photos.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * photos field in *FeaturedPhotos → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_photos.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<
    Simplify<FeaturedPhotosSliceDefaultPrimaryPhotosItem>
  >;
}

/**
 * Default variation for FeaturedPhotos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedPhotosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedPhotosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedPhotos*
 */
type FeaturedPhotosSliceVariation = FeaturedPhotosSliceDefault;

/**
 * FeaturedPhotos Shared Slice
 *
 * - **API ID**: `featured_photos`
 * - **Description**: FeaturedPhotos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedPhotosSlice = prismic.SharedSlice<
  "featured_photos",
  FeaturedPhotosSliceVariation
>;

/**
 * Item in *Features → Default → Primary → Features*
 */
export interface FeaturesSliceDefaultPrimaryFeaturesItem {
  /**
   * title field in *Features → Default → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.features[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Features → Default → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.features[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Features → Default → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
  /**
   * Title field in *Features → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Subtitle field in *Features → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Features field in *Features → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.features[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  features: prismic.GroupField<
    Simplify<FeaturesSliceDefaultPrimaryFeaturesItem>
  >;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → CTA Links*
 */
export interface HeroSliceDefaultPrimaryCtaLinksItem {
  /**
   * label field in *Hero → Default → Primary → CTA Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * link field in *Hero → Default → Primary → CTA Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *Hero → Default → Primary → types*
 */
export interface HeroSliceDefaultPrimaryTypesItem {
  /**
   * label field in *Hero → Default → Primary → types*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.types[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary → types*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.types[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Subtitle field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * CTA Links field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta_links: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryCtaLinksItem>>;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * types field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.types[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  types: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryTypesItem>>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Image → Banner → Primary*
 */
export interface ImageSliceBannerPrimary {
  /**
   * Image field in *Image → Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
  "banner",
  Simplify<ImageSliceBannerPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Item in *ImageCards → Default → Primary → Cards*
 */
export interface ImageCardsSliceDefaultPrimaryCardsItem {
  /**
   * Image field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Button Link field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Button Text field in *ImageCards → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[].buttonText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonText: prismic.KeyTextField;
}

/**
 * Primary content in *ImageCards → Default → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
  /**
   * Heading field in *ImageCards → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Cards field in *ImageCards → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<ImageCardsSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageCardsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<
  "image_cards",
  ImageCardsSliceVariation
>;

/**
 * Item in *NavigationItem → Default → Primary → Menu Items*
 */
export interface NavigationItemSliceDefaultPrimaryMenuItemsItem {
  /**
   * label field in *NavigationItem → Default → Primary → Menu Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.menu_items[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * link field in *NavigationItem → Default → Primary → Menu Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.menu_items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *NavigationItem → Default → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Label field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Menu Items field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.menu_items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<
    Simplify<NavigationItemSliceDefaultPrimaryMenuItemsItem>
  >;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Item in *PhotosGrid → Default → Primary → Photos*
 */
export interface PhotosGridSliceDefaultPrimaryPhotosItem {
  /**
   * Photo field in *PhotosGrid → Default → Primary → Photos*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photos_grid.default.primary.photos[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Image Link field in *PhotosGrid → Default → Primary → Photos*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: photos_grid.default.primary.photos[].image_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  image_link: prismic.LinkToMediaField;

  /**
   * Description field in *PhotosGrid → Default → Primary → Photos*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photos_grid.default.primary.photos[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *PhotosGrid → Default → Primary*
 */
export interface PhotosGridSliceDefaultPrimary {
  /**
   * Photos field in *PhotosGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: photos_grid.default.primary.photos[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  photos: prismic.GroupField<Simplify<PhotosGridSliceDefaultPrimaryPhotosItem>>;
}

/**
 * Default variation for PhotosGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotosGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PhotosGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PhotosGrid*
 */
type PhotosGridSliceVariation = PhotosGridSliceDefault;

/**
 * PhotosGrid Shared Slice
 *
 * - **API ID**: `photos_grid`
 * - **Description**: PhotosGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotosGridSlice = prismic.SharedSlice<
  "photos_grid",
  PhotosGridSliceVariation
>;

/**
 * Item in *ProductDesign → Default → Primary → Left Section*
 */
export interface ProductDesignSliceDefaultPrimaryLeftSectionItem {
  /**
   * Icon field in *ProductDesign → Default → Primary → Left Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.left_section[].icon
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  icon: prismic.RichTextField;

  /**
   * Title field in *ProductDesign → Default → Primary → Left Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.left_section[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *ProductDesign → Default → Primary → Left Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.left_section[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Item in *ProductDesign → Default → Primary → Right Section*
 */
export interface ProductDesignSliceDefaultPrimaryRightSectionItem {
  /**
   * Icon field in *ProductDesign → Default → Primary → Right Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.right_section[].icon
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  icon: prismic.RichTextField;

  /**
   * Title field in *ProductDesign → Default → Primary → Right Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.right_section[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *ProductDesign → Default → Primary → Right Section*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.right_section[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *ProductDesign → Default → Primary*
 */
export interface ProductDesignSliceDefaultPrimary {
  /**
   * Title field in *ProductDesign → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Image field in *ProductDesign → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Left Section field in *ProductDesign → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.left_section[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  left_section: prismic.GroupField<
    Simplify<ProductDesignSliceDefaultPrimaryLeftSectionItem>
  >;

  /**
   * Right Section field in *ProductDesign → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_design.default.primary.right_section[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  right_section: prismic.GroupField<
    Simplify<ProductDesignSliceDefaultPrimaryRightSectionItem>
  >;
}

/**
 * Default variation for ProductDesign Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDesignSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductDesignSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductDesign*
 */
type ProductDesignSliceVariation = ProductDesignSliceDefault;

/**
 * ProductDesign Shared Slice
 *
 * - **API ID**: `product_design`
 * - **Description**: ProductDesign
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductDesignSlice = prismic.SharedSlice<
  "product_design",
  ProductDesignSliceVariation
>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Text → Two Columns → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
  /**
   * Text field in *Text → Two Columns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.twoColumns.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
  "twoColumns",
  Simplify<TextSliceTwoColumnsPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataCtaLinksItem,
      AllDocumentTypes,
      CarouselSlice,
      CarouselSliceDefaultPrimaryPhotosItem,
      CarouselSliceDefaultPrimary,
      CarouselSliceVariation,
      CarouselSliceDefault,
      FAskedQuestionsSlice,
      FAskedQuestionsSliceDefaultPrimaryItemsItem,
      FAskedQuestionsSliceDefaultPrimary,
      FAskedQuestionsSliceVariation,
      FAskedQuestionsSliceDefault,
      FeaturedPhotosSlice,
      FeaturedPhotosSliceDefaultPrimaryPhotosItem,
      FeaturedPhotosSliceDefaultPrimary,
      FeaturedPhotosSliceVariation,
      FeaturedPhotosSliceDefault,
      FeaturesSlice,
      FeaturesSliceDefaultPrimaryFeaturesItem,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryCtaLinksItem,
      HeroSliceDefaultPrimaryTypesItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceBannerPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceBanner,
      ImageCardsSlice,
      ImageCardsSliceDefaultPrimaryCardsItem,
      ImageCardsSliceDefaultPrimary,
      ImageCardsSliceVariation,
      ImageCardsSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimaryMenuItemsItem,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      PhotosGridSlice,
      PhotosGridSliceDefaultPrimaryPhotosItem,
      PhotosGridSliceDefaultPrimary,
      PhotosGridSliceVariation,
      PhotosGridSliceDefault,
      ProductDesignSlice,
      ProductDesignSliceDefaultPrimaryLeftSectionItem,
      ProductDesignSliceDefaultPrimaryRightSectionItem,
      ProductDesignSliceDefaultPrimary,
      ProductDesignSliceVariation,
      ProductDesignSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceTwoColumnsPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TextSliceTwoColumns,
    };
  }
}
