import type { DocumentNode, ExecutionResult } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  Time: any;
  Upload: any;
};

export type AdminUser = {
  firstname: Scalars["String"];
  id: Scalars["ID"];
  lastname: Scalars["String"];
  username?: Maybe<Scalars["String"]>;
};

export type BuyProduct = {
  LeftButtonLink?: Maybe<Scalars["String"]>;
  RightButtonLink?: Maybe<Scalars["String"]>;
  Text?: Maybe<Scalars["String"]>;
  TitleBlack?: Maybe<Scalars["String"]>;
  TitleGreen?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  leftButtonText?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  rightButtonText?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type BuyProductInput = {
  LeftButtonLink?: InputMaybe<Scalars["String"]>;
  RightButtonLink?: InputMaybe<Scalars["String"]>;
  Text?: InputMaybe<Scalars["String"]>;
  TitleBlack?: InputMaybe<Scalars["String"]>;
  TitleGreen?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  leftButtonText?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  rightButtonText?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type Card = {
  card?: Maybe<Array<Maybe<ComponentProductCard>>>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type CardInput = {
  card?: InputMaybe<Array<InputMaybe<ComponentProductCardInput>>>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type ComponentContactForm = {
  id: Scalars["ID"];
  label: Scalars["String"];
  placeholder: Scalars["String"];
};

export type ComponentContactFormInput = {
  label: Scalars["String"];
  placeholder: Scalars["String"];
};

export type ComponentFaqAccordion = {
  Description: Scalars["String"];
  Title: Scalars["String"];
  id: Scalars["ID"];
};

export type ComponentFaqAccordionInput = {
  Description: Scalars["String"];
  Title: Scalars["String"];
};

export type ComponentFooterSocial = {
  icon?: Maybe<UploadFile>;
  id: Scalars["ID"];
  link: Scalars["String"];
  name: Scalars["String"];
};

export type ComponentFooterSocialInput = {
  icon?: InputMaybe<Scalars["ID"]>;
  link: Scalars["String"];
  name: Scalars["String"];
};

export type ComponentFunctionsListFunctionsList = {
  Number?: Maybe<Scalars["Int"]>;
  elementText?: Maybe<Scalars["String"]>;
  elementTitle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type ComponentFunctionsListFunctionsListInput = {
  Number?: InputMaybe<Scalars["Int"]>;
  elementText?: InputMaybe<Scalars["String"]>;
  elementTitle?: InputMaybe<Scalars["String"]>;
};

export type ComponentProductCard = {
  description: Scalars["String"];
  icon?: Maybe<UploadFile>;
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type ComponentProductCardInput = {
  description: Scalars["String"];
  icon?: InputMaybe<Scalars["ID"]>;
  title: Scalars["String"];
};

export type Contact = {
  ButtonLabel: Scalars["String"];
  Description: Scalars["String"];
  Email?: Maybe<Scalars["String"]>;
  Form?: Maybe<Array<Maybe<ComponentContactForm>>>;
  Phone?: Maybe<Scalars["String"]>;
  Title: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  updated_at: Scalars["DateTime"];
};

export type ContactForm = {
  Email: Scalars["String"];
  Message: Scalars["String"];
  Name: Scalars["String"];
  Phone: Scalars["String"];
  PrivacyPolicy: Scalars["Boolean"];
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  updated_at: Scalars["DateTime"];
};

export type ContactFormAggregator = {
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ContactFormConnection = {
  aggregate?: Maybe<ContactFormAggregator>;
  groupBy?: Maybe<ContactFormGroupBy>;
  values?: Maybe<Array<Maybe<ContactForm>>>;
};

export type ContactFormConnectionCreatedAt = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ContactFormConnectionEmail = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ContactFormConnectionId = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type ContactFormConnectionMessage = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ContactFormConnectionName = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ContactFormConnectionPhone = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type ContactFormConnectionPrivacyPolicy = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type ContactFormConnectionPublishedAt = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ContactFormConnectionUpdatedAt = {
  connection?: Maybe<ContactFormConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type ContactFormGroupBy = {
  Email?: Maybe<Array<Maybe<ContactFormConnectionEmail>>>;
  Message?: Maybe<Array<Maybe<ContactFormConnectionMessage>>>;
  Name?: Maybe<Array<Maybe<ContactFormConnectionName>>>;
  Phone?: Maybe<Array<Maybe<ContactFormConnectionPhone>>>;
  PrivacyPolicy?: Maybe<Array<Maybe<ContactFormConnectionPrivacyPolicy>>>;
  created_at?: Maybe<Array<Maybe<ContactFormConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<ContactFormConnectionId>>>;
  published_at?: Maybe<Array<Maybe<ContactFormConnectionPublishedAt>>>;
  updated_at?: Maybe<Array<Maybe<ContactFormConnectionUpdatedAt>>>;
};

export type ContactFormInput = {
  Email: Scalars["String"];
  Message: Scalars["String"];
  Name: Scalars["String"];
  Phone: Scalars["String"];
  PrivacyPolicy: Scalars["Boolean"];
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type ContactInput = {
  ButtonLabel?: InputMaybe<Scalars["String"]>;
  Description: Scalars["String"];
  Email?: InputMaybe<Scalars["String"]>;
  Form?: InputMaybe<Array<ComponentContactFormInput>>;
  Phone?: InputMaybe<Scalars["String"]>;
  Title: Scalars["String"];
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type Faq = {
  AccordionElement?: Maybe<Array<Maybe<ComponentFaqAccordion>>>;
  AccordionImg?: Maybe<UploadFile>;
  Description?: Maybe<Scalars["String"]>;
  TextImg?: Maybe<UploadFile>;
  Title: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  updated_at: Scalars["DateTime"];
};

export type FaqInput = {
  AccordionElement?: InputMaybe<Array<InputMaybe<ComponentFaqAccordionInput>>>;
  AccordionImg?: InputMaybe<Scalars["ID"]>;
  Description?: InputMaybe<Scalars["String"]>;
  TextImg?: InputMaybe<Scalars["ID"]>;
  Title: Scalars["String"];
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: InputMaybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  size: Scalars["Float"];
  updated_by?: InputMaybe<Scalars["ID"]>;
  url: Scalars["String"];
  width?: InputMaybe<Scalars["Int"]>;
};

export type Footer = {
  Address: Scalars["String"];
  AddressLink: Scalars["String"];
  PhoneNumber: Scalars["String"];
  Social?: Maybe<Array<Maybe<ComponentFooterSocial>>>;
  TitleBottom: Scalars["String"];
  TitleTop: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  updated_at: Scalars["DateTime"];
};

export type FooterInput = {
  Address: Scalars["String"];
  AddressLink: Scalars["String"];
  PhoneNumber: Scalars["String"];
  Social?: InputMaybe<Array<InputMaybe<ComponentFooterSocialInput>>>;
  TitleBottom: Scalars["String"];
  TitleTop: Scalars["String"];
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type FunctionInput = {
  FunctionsList?: InputMaybe<
    Array<InputMaybe<ComponentFunctionsListFunctionsListInput>>
  >;
  Image?: InputMaybe<Scalars["ID"]>;
  Title?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type Functions = {
  FunctionsList?: Maybe<Array<Maybe<ComponentFunctionsListFunctionsList>>>;
  Image?: Maybe<UploadFile>;
  Title?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  updated_at: Scalars["DateTime"];
};

export type Hero = {
  ButtonLink: Scalars["String"];
  ButtonText?: Maybe<Scalars["String"]>;
  Description: Scalars["String"];
  Header?: Maybe<Scalars["String"]>;
  SecondDescription?: Maybe<Scalars["String"]>;
  bottomLeft?: Maybe<UploadFile>;
  bottomRight?: Maybe<UploadFile>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  published_at?: Maybe<Scalars["DateTime"]>;
  topLeft?: Maybe<UploadFile>;
  topRight?: Maybe<UploadFile>;
  updated_at: Scalars["DateTime"];
};

export type HeroInput = {
  ButtonLink?: InputMaybe<Scalars["String"]>;
  ButtonText?: InputMaybe<Scalars["String"]>;
  Description: Scalars["String"];
  Header?: InputMaybe<Scalars["String"]>;
  SecondDescription?: InputMaybe<Scalars["String"]>;
  bottomLeft?: InputMaybe<Scalars["ID"]>;
  bottomRight?: InputMaybe<Scalars["ID"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  topLeft?: InputMaybe<Scalars["ID"]>;
  topRight?: InputMaybe<Scalars["ID"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type I18NLocale = {
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
};

export type InputId = {
  id: Scalars["ID"];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type Morph =
  | BuyProduct
  | Card
  | ComponentContactForm
  | ComponentFaqAccordion
  | ComponentFooterSocial
  | ComponentFunctionsListFunctionsList
  | ComponentProductCard
  | Contact
  | ContactForm
  | ContactFormAggregator
  | ContactFormConnection
  | ContactFormConnectionCreatedAt
  | ContactFormConnectionEmail
  | ContactFormConnectionId
  | ContactFormConnectionMessage
  | ContactFormConnectionName
  | ContactFormConnectionPhone
  | ContactFormConnectionPrivacyPolicy
  | ContactFormConnectionPublishedAt
  | ContactFormConnectionUpdatedAt
  | ContactFormGroupBy
  | Faq
  | Footer
  | Functions
  | Hero
  | I18NLocale
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProviderMetadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateContactFormPayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteBuyProductPayload
  | DeleteCardPayload
  | DeleteContactFormPayload
  | DeleteContactPayload
  | DeleteFaqPayload
  | DeleteFilePayload
  | DeleteFooterPayload
  | DeleteFunctionPayload
  | DeleteHeroPayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateBuyProductPayload
  | UpdateCardPayload
  | UpdateContactFormPayload
  | UpdateContactPayload
  | UpdateFaqPayload
  | UpdateFooterPayload
  | UpdateFunctionPayload
  | UpdateHeroPayload
  | UpdateRolePayload
  | UpdateUserPayload;

export type Mutation = {
  createContactForm?: Maybe<CreateContactFormPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteBuyProduct?: Maybe<DeleteBuyProductPayload>;
  deleteCard?: Maybe<DeleteCardPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  deleteContactForm?: Maybe<DeleteContactFormPayload>;
  deleteFaq?: Maybe<DeleteFaqPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteFooter?: Maybe<DeleteFooterPayload>;
  deleteFunction?: Maybe<DeleteFunctionPayload>;
  deleteHero?: Maybe<DeleteHeroPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBuyProduct?: Maybe<UpdateBuyProductPayload>;
  updateCard?: Maybe<UpdateCardPayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  updateContactForm?: Maybe<UpdateContactFormPayload>;
  updateFaq?: Maybe<UpdateFaqPayload>;
  updateFileInfo: UploadFile;
  updateFooter?: Maybe<UpdateFooterPayload>;
  updateFunction?: Maybe<UpdateFunctionPayload>;
  updateHero?: Maybe<UpdateHeroPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateContactFormArgs = {
  input?: InputMaybe<CreateContactFormInput>;
};

export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type MutationDeleteContactFormArgs = {
  input?: InputMaybe<DeleteContactFormInput>;
};

export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};

export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};

export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
  source?: InputMaybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateBuyProductArgs = {
  input?: InputMaybe<UpdateBuyProductInput>;
};

export type MutationUpdateCardArgs = {
  input?: InputMaybe<UpdateCardInput>;
};

export type MutationUpdateContactArgs = {
  input?: InputMaybe<UpdateContactInput>;
};

export type MutationUpdateContactFormArgs = {
  input?: InputMaybe<UpdateContactFormInput>;
};

export type MutationUpdateFaqArgs = {
  input?: InputMaybe<UpdateFaqInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationUpdateFooterArgs = {
  input?: InputMaybe<UpdateFooterInput>;
};

export type MutationUpdateFunctionArgs = {
  input?: InputMaybe<UpdateFunctionInput>;
};

export type MutationUpdateHeroArgs = {
  input?: InputMaybe<UpdateHeroInput>;
};

export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};

export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
  source?: InputMaybe<Scalars["String"]>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  buyProduct?: Maybe<BuyProduct>;
  card?: Maybe<Card>;
  contact?: Maybe<Contact>;
  contactForm?: Maybe<ContactForm>;
  contactForms?: Maybe<Array<Maybe<ContactForm>>>;
  contactFormsConnection?: Maybe<ContactFormConnection>;
  faq?: Maybe<Faq>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  footer?: Maybe<Footer>;
  function?: Maybe<Functions>;
  hero?: Maybe<Hero>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryBuyProductArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryCardArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryContactArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryContactFormArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryContactFormsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryContactFormsConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFaqArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryFunctionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryHeroArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  created_at: Scalars["DateTime"];
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars["Float"];
  updated_at: Scalars["DateTime"];
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UploadFileAggregatorAvg = {
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCaption = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionCreatedAt = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionExt = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionFormats = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionHash = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionHeight = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileConnectionId = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UploadFileConnectionMime = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionName = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionPreviewUrl = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProvider = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionProviderMetadata = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnectionSize = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnectionUpdatedAt = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UploadFileConnectionUrl = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UploadFileConnectionWidth = {
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars["Int"]>;
};

export type UploadFileGroupBy = {
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProviderMetadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  email: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  username: Scalars["String"];
};

export type UserPermissionsPasswordPayload = {
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
  action: Scalars["String"];
  controller: Scalars["String"];
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars["String"];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionId = {
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleConnectionName = {
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleConnectionType = {
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRoleGroupBy = {
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  created_at: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UsersPermissionsUserAggregator = {
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["Boolean"]>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionEmail = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionId = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionProvider = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserConnectionRole = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsUserConnectionUsername = {
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsUserGroupBy = {
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateContactFormInput = {
  data?: InputMaybe<ContactFormInput>;
};

export type CreateContactFormPayload = {
  contactForm?: Maybe<ContactForm>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteBuyProductPayload = {
  buyProduct?: Maybe<BuyProduct>;
};

export type DeleteCardPayload = {
  card?: Maybe<Card>;
};

export type DeleteContactFormInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteContactFormPayload = {
  contactForm?: Maybe<ContactForm>;
};

export type DeleteContactPayload = {
  contact?: Maybe<Contact>;
};

export type DeleteFaqPayload = {
  faq?: Maybe<Faq>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  file?: Maybe<UploadFile>;
};

export type DeleteFooterPayload = {
  footer?: Maybe<Footer>;
};

export type DeleteFunctionPayload = {
  function?: Maybe<Functions>;
};

export type DeleteHeroPayload = {
  hero?: Maybe<Hero>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  user?: Maybe<UsersPermissionsUser>;
};

export type EditBuyProductInput = {
  LeftButtonLink?: InputMaybe<Scalars["String"]>;
  RightButtonLink?: InputMaybe<Scalars["String"]>;
  Text?: InputMaybe<Scalars["String"]>;
  TitleBlack?: InputMaybe<Scalars["String"]>;
  TitleGreen?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  leftButtonText?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  rightButtonText?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditCardInput = {
  card?: InputMaybe<Array<InputMaybe<EditComponentProductCardInput>>>;
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditComponentContactFormInput = {
  id?: InputMaybe<Scalars["ID"]>;
  label?: InputMaybe<Scalars["String"]>;
  placeholder?: InputMaybe<Scalars["String"]>;
};

export type EditComponentFaqAccordionInput = {
  Description?: InputMaybe<Scalars["String"]>;
  Title?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EditComponentFooterSocialInput = {
  icon?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type EditComponentFunctionsListFunctionsListInput = {
  Number?: InputMaybe<Scalars["Int"]>;
  elementText?: InputMaybe<Scalars["String"]>;
  elementTitle?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type EditComponentProductCardInput = {
  description?: InputMaybe<Scalars["String"]>;
  icon?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type EditContactFormInput = {
  Email?: InputMaybe<Scalars["String"]>;
  Message?: InputMaybe<Scalars["String"]>;
  Name?: InputMaybe<Scalars["String"]>;
  Phone?: InputMaybe<Scalars["String"]>;
  PrivacyPolicy?: InputMaybe<Scalars["Boolean"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditContactInput = {
  ButtonLabel?: InputMaybe<Scalars["String"]>;
  Description?: InputMaybe<Scalars["String"]>;
  Email?: InputMaybe<Scalars["String"]>;
  Form?: InputMaybe<Array<InputMaybe<EditComponentContactFormInput>>>;
  Phone?: InputMaybe<Scalars["String"]>;
  Title?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditFaqInput = {
  AccordionElement?: InputMaybe<
    Array<InputMaybe<EditComponentFaqAccordionInput>>
  >;
  AccordionImg?: InputMaybe<Scalars["ID"]>;
  Description?: InputMaybe<Scalars["String"]>;
  TextImg?: InputMaybe<Scalars["ID"]>;
  Title?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  size?: InputMaybe<Scalars["Float"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type EditFooterInput = {
  Address?: InputMaybe<Scalars["String"]>;
  AddressLink?: InputMaybe<Scalars["String"]>;
  PhoneNumber?: InputMaybe<Scalars["String"]>;
  Social?: InputMaybe<Array<InputMaybe<EditComponentFooterSocialInput>>>;
  TitleBottom?: InputMaybe<Scalars["String"]>;
  TitleTop?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditFunctionInput = {
  FunctionsList?: InputMaybe<
    Array<InputMaybe<EditComponentFunctionsListFunctionsListInput>>
  >;
  Image?: InputMaybe<Scalars["ID"]>;
  Title?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditHeroInput = {
  ButtonLink?: InputMaybe<Scalars["String"]>;
  ButtonText?: InputMaybe<Scalars["String"]>;
  Description?: InputMaybe<Scalars["String"]>;
  Header?: InputMaybe<Scalars["String"]>;
  SecondDescription?: InputMaybe<Scalars["String"]>;
  bottomLeft?: InputMaybe<Scalars["ID"]>;
  bottomRight?: InputMaybe<Scalars["ID"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  published_at?: InputMaybe<Scalars["DateTime"]>;
  topLeft?: InputMaybe<Scalars["ID"]>;
  topRight?: InputMaybe<Scalars["ID"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars["String"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  created_by?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  updated_by?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UpdateBuyProductInput = {
  data?: InputMaybe<EditBuyProductInput>;
};

export type UpdateBuyProductPayload = {
  buyProduct?: Maybe<BuyProduct>;
};

export type UpdateCardInput = {
  data?: InputMaybe<EditCardInput>;
};

export type UpdateCardPayload = {
  card?: Maybe<Card>;
};

export type UpdateContactFormInput = {
  data?: InputMaybe<EditContactFormInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateContactFormPayload = {
  contactForm?: Maybe<ContactForm>;
};

export type UpdateContactInput = {
  data?: InputMaybe<EditContactInput>;
};

export type UpdateContactPayload = {
  contact?: Maybe<Contact>;
};

export type UpdateFaqInput = {
  data?: InputMaybe<EditFaqInput>;
};

export type UpdateFaqPayload = {
  faq?: Maybe<Faq>;
};

export type UpdateFooterInput = {
  data?: InputMaybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  footer?: Maybe<Footer>;
};

export type UpdateFunctionInput = {
  data?: InputMaybe<EditFunctionInput>;
};

export type UpdateFunctionPayload = {
  function?: Maybe<Functions>;
};

export type UpdateHeroInput = {
  data?: InputMaybe<EditHeroInput>;
};

export type UpdateHeroPayload = {
  hero?: Maybe<Hero>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  user?: Maybe<UsersPermissionsUser>;
};

export type BuyProductQueryVariables = Exact<{ [key: string]: never }>;

export type BuyProductQuery = {
  buyProduct?: {
    TitleBlack?: string | null;
    TitleGreen?: string | null;
    Text?: string | null;
    leftButtonText?: string | null;
    LeftButtonLink?: string | null;
    rightButtonText?: string | null;
    RightButtonLink?: string | null;
  } | null;
};

export type PopulateContactQueryVariables = Exact<{ [key: string]: never }>;

export type PopulateContactQuery = {
  contact?: {
    ButtonLabel: string;
    Title: string;
    Description: string;
    Email?: string | null;
    Phone?: string | null;
    Form?: Array<{
      label: string;
      placeholder: string;
      id: string;
    } | null> | null;
  } | null;
};

export type CreateContactFormMutationVariables = Exact<{
  contactForm: ContactFormInput;
}>;

export type CreateContactFormMutation = {
  createContactForm?: {
    contactForm?: {
      Name: string;
      Phone: string;
      Email: string;
      Message: string;
      PrivacyPolicy: boolean;
    } | null;
  } | null;
};

export type FaqSectionQueryVariables = Exact<{ [key: string]: never }>;

export type FaqSectionQuery = {
  faq?: {
    Title: string;
    Description?: string | null;
    AccordionElement?: Array<{
      Title: string;
      Description: string;
    } | null> | null;
    TextImg?: { url: string } | null;
    AccordionImg?: { url: string } | null;
  } | null;
};

export type PopulateFooterQueryVariables = Exact<{ [key: string]: never }>;

export type PopulateFooterQuery = {
  footer?: {
    TitleTop: string;
    Address: string;
    AddressLink: string;
    TitleBottom: string;
    PhoneNumber: string;
    Social?: Array<{
      link: string;
      name: string;
      id: string;
      icon?: { url: string } | null;
    } | null> | null;
  } | null;
};

export type FunctionsQueryVariables = Exact<{ [key: string]: never }>;

export type FunctionsQuery = {
  function?: {
    Title?: string | null;
    FunctionsList?: Array<{
      Number?: number | null;
      elementTitle?: string | null;
      elementText?: string | null;
    } | null> | null;
    Image?: { url: string } | null;
  } | null;
};

export type PopulateHeroQueryVariables = Exact<{ [key: string]: never }>;

export type PopulateHeroQuery = {
  hero?: {
    Header?: string | null;
    Description: string;
    SecondDescription?: string | null;
    ButtonText?: string | null;
    ButtonLink: string;
    topRight?: { url: string } | null;
    topLeft?: { url: string } | null;
    bottomLeft?: { url: string } | null;
    bottomRight?: { url: string } | null;
  } | null;
};

export type PopulateProductQueryVariables = Exact<{ [key: string]: never }>;

export type PopulateProductQuery = {
  card?: {
    title: string;
    description?: string | null;
    card?: Array<{
      id: string;
      title: string;
      description: string;
      icon?: { url: string } | null;
    } | null> | null;
  } | null;
};

export const BuyProductDocument = gql`
  query buyProduct {
    buyProduct {
      TitleBlack
      TitleGreen
      Text
      leftButtonText
      LeftButtonLink
      rightButtonText
      RightButtonLink
    }
  }
`;
export const PopulateContactDocument = gql`
  query populateContact {
    contact {
      ButtonLabel
      Title
      Description
      Email
      Phone
      Form {
        label
        placeholder
        id
      }
    }
  }
`;
export const CreateContactFormDocument = gql`
  mutation createContactForm($contactForm: ContactFormInput!) {
    createContactForm(input: { data: $contactForm }) {
      contactForm {
        Name
        Phone
        Email
        Message
        PrivacyPolicy
      }
    }
  }
`;
export const FaqSectionDocument = gql`
  query faqSection {
    faq {
      Title
      Description
      AccordionElement {
        Title
        Description
      }
      TextImg {
        url
      }
      AccordionImg {
        url
      }
    }
  }
`;
export const PopulateFooterDocument = gql`
  query populateFooter {
    footer {
      TitleTop
      Address
      AddressLink
      TitleBottom
      PhoneNumber
      Social {
        link
        name
        icon {
          url
        }
        id
      }
    }
  }
`;
export const FunctionsDocument = gql`
  query functions {
    function {
      Title
      FunctionsList {
        Number
        elementTitle
        elementText
      }
      Image {
        url
      }
    }
  }
`;
export const PopulateHeroDocument = gql`
  query populateHero {
    hero {
      Header
      Description
      SecondDescription
      ButtonText
      ButtonLink
      topRight {
        url
      }
      topLeft {
        url
      }
      bottomLeft {
        url
      }
      bottomRight {
        url
      }
    }
  }
`;
export const PopulateProductDocument = gql`
  query populateProduct {
    card {
      title
      description
      card {
        id
        title
        description
        icon {
          url
        }
      }
    }
  }
`;
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    buyProduct(
      variables?: BuyProductQueryVariables,
      options?: C
    ): Promise<ExecutionResult<BuyProductQuery, E>> {
      return requester<BuyProductQuery, BuyProductQueryVariables>(
        BuyProductDocument,
        variables,
        options
      ) as Promise<ExecutionResult<BuyProductQuery, E>>;
    },
    populateContact(
      variables?: PopulateContactQueryVariables,
      options?: C
    ): Promise<ExecutionResult<PopulateContactQuery, E>> {
      return requester<PopulateContactQuery, PopulateContactQueryVariables>(
        PopulateContactDocument,
        variables,
        options
      ) as Promise<ExecutionResult<PopulateContactQuery, E>>;
    },
    createContactForm(
      variables: CreateContactFormMutationVariables,
      options?: C
    ): Promise<ExecutionResult<CreateContactFormMutation, E>> {
      return requester<
        CreateContactFormMutation,
        CreateContactFormMutationVariables
      >(CreateContactFormDocument, variables, options) as Promise<
        ExecutionResult<CreateContactFormMutation, E>
      >;
    },
    faqSection(
      variables?: FaqSectionQueryVariables,
      options?: C
    ): Promise<ExecutionResult<FaqSectionQuery, E>> {
      return requester<FaqSectionQuery, FaqSectionQueryVariables>(
        FaqSectionDocument,
        variables,
        options
      ) as Promise<ExecutionResult<FaqSectionQuery, E>>;
    },
    populateFooter(
      variables?: PopulateFooterQueryVariables,
      options?: C
    ): Promise<ExecutionResult<PopulateFooterQuery, E>> {
      return requester<PopulateFooterQuery, PopulateFooterQueryVariables>(
        PopulateFooterDocument,
        variables,
        options
      ) as Promise<ExecutionResult<PopulateFooterQuery, E>>;
    },
    functions(
      variables?: FunctionsQueryVariables,
      options?: C
    ): Promise<ExecutionResult<FunctionsQuery, E>> {
      return requester<FunctionsQuery, FunctionsQueryVariables>(
        FunctionsDocument,
        variables,
        options
      ) as Promise<ExecutionResult<FunctionsQuery, E>>;
    },
    populateHero(
      variables?: PopulateHeroQueryVariables,
      options?: C
    ): Promise<ExecutionResult<PopulateHeroQuery, E>> {
      return requester<PopulateHeroQuery, PopulateHeroQueryVariables>(
        PopulateHeroDocument,
        variables,
        options
      ) as Promise<ExecutionResult<PopulateHeroQuery, E>>;
    },
    populateProduct(
      variables?: PopulateProductQueryVariables,
      options?: C
    ): Promise<ExecutionResult<PopulateProductQuery, E>> {
      return requester<PopulateProductQuery, PopulateProductQueryVariables>(
        PopulateProductDocument,
        variables,
        options
      ) as Promise<ExecutionResult<PopulateProductQuery, E>>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
