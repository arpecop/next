interface ScribeData {
  client_version?: string;
  dnt: boolean;
  widget_id: string;
  widget_origin: string;
  widget_frame: string;
  widget_partner: string;
  widget_site_screen_name: string;
  widget_site_user_id: string;
  widget_creator_screen_name: string;
  widget_creator_user_id: string;
  widget_iframe_version: string;
  widget_data_source: string;
  session_id: string;
}

interface MessengerContext {
  embedId: string;
}

interface ContextProvider {
  scribeData: ScribeData;
  messengerContext: MessengerContext;
  hasResults: boolean;
  lang: string;
  theme: string;
}

interface ImageValue {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface PhotoImageFullSizeLarge {
  image_value: ImageValue;
  type: string;
}

interface ImageValue2 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface ThumbnailImage {
  image_value: ImageValue2;
  type: string;
}

interface Description {
  string_value: string;
  type: string;
}

interface Domain {
  string_value: string;
  type: string;
}

interface ImageValue3 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface ThumbnailImageLarge {
  image_value: ImageValue3;
  type: string;
}

interface ImageValue4 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface SummaryPhotoImageSmall {
  image_value: ImageValue4;
  type: string;
}

interface ImageValue5 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface ThumbnailImageOriginal {
  image_value: ImageValue5;
  type: string;
}

interface UserValue {
  id_str: string;
  path: string[];
}

interface Site {
  scribe_key: string;
  type: string;
  user_value: UserValue;
}

interface ImageValue6 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface PhotoImageFullSizeSmall {
  image_value: ImageValue6;
  type: string;
}

interface ImageValue7 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface SummaryPhotoImageLarge {
  image_value: ImageValue7;
  type: string;
}

interface ImageValue8 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface ThumbnailImageSmall {
  image_value: ImageValue8;
  type: string;
}

interface ImageValue9 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface ThumbnailImageXLarge {
  image_value: ImageValue9;
  type: string;
}

interface ImageValue10 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface PhotoImageFullSizeOriginal {
  image_value: ImageValue10;
  type: string;
}

interface VanityUrl {
  scribe_key: string;
  string_value: string;
  type: string;
}

interface ImageValue11 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface PhotoImageFullSize {
  image_value: ImageValue11;
  type: string;
}

interface Rgb {
  blue: number;
  green: number;
  red: number;
}

interface Palette {
  rgb: Rgb;
  percentage: number;
}

interface ImageColorValue {
  palette: Palette[];
}

interface ThumbnailImageColor {
  image_color_value: ImageColorValue;
  type: string;
}

interface Title {
  string_value: string;
  type: string;
}

interface Rgb2 {
  blue: number;
  green: number;
  red: number;
}

interface Palette2 {
  rgb: Rgb2;
  percentage: number;
}

interface ImageColorValue2 {
  palette: Palette2[];
}

interface SummaryPhotoImageColor {
  image_color_value: ImageColorValue2;
  type: string;
}

interface ImageValue12 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface SummaryPhotoImageXLarge {
  image_value: ImageValue12;
  type: string;
}

interface ImageValue13 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface SummaryPhotoImage {
  image_value: ImageValue13;
  type: string;
}

interface Rgb3 {
  blue: number;
  green: number;
  red: number;
}

interface Palette3 {
  rgb: Rgb3;
  percentage: number;
}

interface ImageColorValue3 {
  palette: Palette3[];
}

interface PhotoImageFullSizeColor {
  image_color_value: ImageColorValue3;
  type: string;
}

interface ImageValue14 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface PhotoImageFullSizeXLarge {
  image_value: ImageValue14;
  type: string;
}

interface CardUrl {
  scribe_key: string;
  string_value: string;
  type: string;
}

interface ImageValue15 {
  height: number;
  width: number;
  url: string;
  alt: string;
}

interface SummaryPhotoImageOriginal {
  image_value: ImageValue15;
  type: string;
}

interface PhotoImageFullSizeAltText {
  string_value: string;
  type: string;
}

interface SummaryPhotoImageAltText {
  string_value: string;
  type: string;
}

interface BindingValues {
  photo_image_full_size_large: PhotoImageFullSizeLarge;
  thumbnail_image: ThumbnailImage;
  description: Description;
  domain: Domain;
  thumbnail_image_large: ThumbnailImageLarge;
  summary_photo_image_small: SummaryPhotoImageSmall;
  thumbnail_image_original: ThumbnailImageOriginal;
  site: Site;
  photo_image_full_size_small: PhotoImageFullSizeSmall;
  summary_photo_image_large: SummaryPhotoImageLarge;
  thumbnail_image_small: ThumbnailImageSmall;
  thumbnail_image_x_large: ThumbnailImageXLarge;
  photo_image_full_size_original: PhotoImageFullSizeOriginal;
  vanity_url: VanityUrl;
  photo_image_full_size: PhotoImageFullSize;
  thumbnail_image_color: ThumbnailImageColor;
  title: Title;
  summary_photo_image_color: SummaryPhotoImageColor;
  summary_photo_image_x_large: SummaryPhotoImageXLarge;
  summary_photo_image: SummaryPhotoImage;
  photo_image_full_size_color: PhotoImageFullSizeColor;
  photo_image_full_size_x_large: PhotoImageFullSizeXLarge;
  card_url: CardUrl;
  summary_photo_image_original: SummaryPhotoImageOriginal;
  photo_image_full_size_alt_text: PhotoImageFullSizeAltText;
  summary_photo_image_alt_text: SummaryPhotoImageAltText;
}

interface Users {
  4686835494: 46868354942;
}

interface Card {
  name: string;
  url: string;
  card_type_url: string;
  binding_values: BindingValues;
  users: Users;
}

interface UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

interface Url {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Tag {
  user_id: string;
  name: string;
  screen_name: string;
  type: string;
}

interface All {
  tags: Tag[];
}

interface Face {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Large {
  faces: Face[];
}

interface Face2 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Medium2 {
  faces: Face2[];
}

interface Face3 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Small {
  faces: Face3[];
}

interface Face4 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Orig {
  faces: Face4[];
}

interface Features2 {
  all: All;
  large: Large;
  medium: Medium2;
  small: Small;
  orig: Orig;
}

interface Large2 {
  h: number;
  w: number;
  resize: string;
}

interface Medium3 {
  h: number;
  w: number;
  resize: string;
}

interface Small2 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb {
  h: number;
  w: number;
  resize: string;
}

interface Sizes {
  large: Large2;
  medium: Medium3;
  small: Small2;
  thumb: Thumb;
}

interface FocusRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface OriginalInfo {
  height: number;
  width: number;
  focus_rects: FocusRect[];
}

interface Medium {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: string;
  url: string;
  features: Features2;
  sizes: Sizes;
  original_info: OriginalInfo;
  source_status_id_str: string;
  source_user_id_str: string;
}

interface Entities {
  user_mentions: UserMention[];
  urls: Url[];
  hashtags: string[];
  symbols: string[];
  media: Medium[];
}

interface Description2 {
  urls: string[];
}

interface Url3 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Url2 {
  urls: Url3[];
}

interface Entities2 {
  description: Description2;
  url: Url2;
}

interface Rgb4 {
  blue: number;
  green: number;
  red: number;
}

interface Palette4 {
  percentage: number;
  rgb: Rgb4;
}

interface ProfileImageExtensionsMediaColor {
  palette: Palette4[];
}

interface User {
  blocking: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities2;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  id: number;
  id_str: string;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  notifications: boolean;
  profile_banner_url: string;
  profile_image_extensions_media_color: ProfileImageExtensionsMediaColor;
  profile_image_url_https: string;
  protected: boolean;
  screen_name: string;
  show_all_inline_media: boolean;
  statuses_count: number;
  time_zone: string;
  translator_type: string;
  url: string;
  utc_offset: number;
  verified: boolean;
  withheld_in_countries: string[];
  withheld_scope: string;
  is_blue_verified: boolean;
}

interface ImageValue16 {
  height: number;
  width: number;
  url: string;
}

interface PhotoImageFullSizeLarge2 {
  image_value: ImageValue16;
  type: string;
}

interface ImageValue17 {
  height: number;
  width: number;
  url: string;
}

interface ThumbnailImage2 {
  image_value: ImageValue17;
  type: string;
}

interface Description3 {
  string_value: string;
  type: string;
}

interface Domain2 {
  string_value: string;
  type: string;
}

interface ImageValue18 {
  height: number;
  width: number;
  url: string;
}

interface ThumbnailImageLarge2 {
  image_value: ImageValue18;
  type: string;
}

interface ImageValue19 {
  height: number;
  width: number;
  url: string;
}

interface SummaryPhotoImageSmall2 {
  image_value: ImageValue19;
  type: string;
}

interface ImageValue20 {
  height: number;
  width: number;
  url: string;
}

interface ThumbnailImageOriginal2 {
  image_value: ImageValue20;
  type: string;
}

interface UserValue2 {
  id_str: string;
  path: string[];
}

interface Site2 {
  scribe_key: string;
  type: string;
  user_value: UserValue2;
}

interface ImageValue21 {
  height: number;
  width: number;
  url: string;
}

interface PhotoImageFullSizeSmall2 {
  image_value: ImageValue21;
  type: string;
}

interface ImageValue22 {
  height: number;
  width: number;
  url: string;
}

interface SummaryPhotoImageLarge2 {
  image_value: ImageValue22;
  type: string;
}

interface ImageValue23 {
  height: number;
  width: number;
  url: string;
}

interface ThumbnailImageSmall2 {
  image_value: ImageValue23;
  type: string;
}

interface ImageValue24 {
  height: number;
  width: number;
  url: string;
}

interface ThumbnailImageXLarge2 {
  image_value: ImageValue24;
  type: string;
}

interface ImageValue25 {
  height: number;
  width: number;
  url: string;
}

interface PhotoImageFullSizeOriginal2 {
  image_value: ImageValue25;
  type: string;
}

interface VanityUrl2 {
  scribe_key: string;
  string_value: string;
  type: string;
}

interface ImageValue26 {
  height: number;
  width: number;
  url: string;
}

interface PhotoImageFullSize2 {
  image_value: ImageValue26;
  type: string;
}

interface Rgb5 {
  blue: number;
  green: number;
  red: number;
}

interface Palette5 {
  rgb: Rgb5;
  percentage: number;
}

interface ImageColorValue4 {
  palette: Palette5[];
}

interface ThumbnailImageColor2 {
  image_color_value: ImageColorValue4;
  type: string;
}

interface Title2 {
  string_value: string;
  type: string;
}

interface Rgb6 {
  blue: number;
  green: number;
  red: number;
}

interface Palette6 {
  rgb: Rgb6;
  percentage: number;
}

interface ImageColorValue5 {
  palette: Palette6[];
}

interface SummaryPhotoImageColor2 {
  image_color_value: ImageColorValue5;
  type: string;
}

interface ImageValue27 {
  height: number;
  width: number;
  url: string;
}

interface SummaryPhotoImageXLarge2 {
  image_value: ImageValue27;
  type: string;
}

interface ImageValue28 {
  height: number;
  width: number;
  url: string;
}

interface SummaryPhotoImage2 {
  image_value: ImageValue28;
  type: string;
}

interface Rgb7 {
  blue: number;
  green: number;
  red: number;
}

interface Palette7 {
  rgb: Rgb7;
  percentage: number;
}

interface ImageColorValue6 {
  palette: Palette7[];
}

interface PhotoImageFullSizeColor2 {
  image_color_value: ImageColorValue6;
  type: string;
}

interface ImageValue29 {
  height: number;
  width: number;
  url: string;
}

interface PhotoImageFullSizeXLarge2 {
  image_value: ImageValue29;
  type: string;
}

interface CardUrl2 {
  scribe_key: string;
  string_value: string;
  type: string;
}

interface ImageValue30 {
  height: number;
  width: number;
  url: string;
}

interface SummaryPhotoImageOriginal2 {
  image_value: ImageValue30;
  type: string;
}

interface BindingValues2 {
  photo_image_full_size_large: PhotoImageFullSizeLarge2;
  thumbnail_image: ThumbnailImage2;
  description: Description3;
  domain: Domain2;
  thumbnail_image_large: ThumbnailImageLarge2;
  summary_photo_image_small: SummaryPhotoImageSmall2;
  thumbnail_image_original: ThumbnailImageOriginal2;
  site: Site2;
  photo_image_full_size_small: PhotoImageFullSizeSmall2;
  summary_photo_image_large: SummaryPhotoImageLarge2;
  thumbnail_image_small: ThumbnailImageSmall2;
  thumbnail_image_x_large: ThumbnailImageXLarge2;
  photo_image_full_size_original: PhotoImageFullSizeOriginal2;
  vanity_url: VanityUrl2;
  photo_image_full_size: PhotoImageFullSize2;
  thumbnail_image_color: ThumbnailImageColor2;
  title: Title2;
  summary_photo_image_color: SummaryPhotoImageColor2;
  summary_photo_image_x_large: SummaryPhotoImageXLarge2;
  summary_photo_image: SummaryPhotoImage2;
  photo_image_full_size_color: PhotoImageFullSizeColor2;
  photo_image_full_size_x_large: PhotoImageFullSizeXLarge2;
  card_url: CardUrl2;
  summary_photo_image_original: SummaryPhotoImageOriginal2;
}

interface Users2 {
  4686835494: 46868354943;
}

interface Card2 {
  name: string;
  url: string;
  card_type_url: string;
  binding_values: BindingValues2;
  users: Users2;
}

interface UserMention2 {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

interface Url4 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Tag2 {
  user_id: string;
  name: string;
  screen_name: string;
  type: string;
}

interface All2 {
  tags: Tag2[];
}

interface Face5 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Large3 {
  faces: Face5[];
}

interface Face6 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Medium5 {
  faces: Face6[];
}

interface Face7 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Small3 {
  faces: Face7[];
}

interface Face8 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Orig2 {
  faces: Face8[];
}

interface Features3 {
  all: All2;
  large: Large3;
  medium: Medium5;
  small: Small3;
  orig: Orig2;
}

interface Large4 {
  h: number;
  w: number;
  resize: string;
}

interface Medium6 {
  h: number;
  w: number;
  resize: string;
}

interface Small4 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb2 {
  h: number;
  w: number;
  resize: string;
}

interface Sizes2 {
  large: Large4;
  medium: Medium6;
  small: Small4;
  thumb: Thumb2;
}

interface FocusRect2 {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface OriginalInfo2 {
  height: number;
  width: number;
  focus_rects: FocusRect2[];
}

interface Medium4 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: string;
  url: string;
  features: Features3;
  sizes: Sizes2;
  original_info: OriginalInfo2;
}

interface Entities3 {
  user_mentions: UserMention2[];
  urls: Url4[];
  hashtags: string[];
  symbols: string[];
  media: Medium4[];
}

interface Url5 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Description4 {
  urls: Url5[];
}

interface Url7 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Url6 {
  urls: Url7[];
}

interface Entities4 {
  description: Description4;
  url: Url6;
}

interface Rgb8 {
  blue: number;
  green: number;
  red: number;
}

interface Palette8 {
  percentage: number;
  rgb: Rgb8;
}

interface ProfileImageExtensionsMediaColor2 {
  palette: Palette8[];
}

interface User2 {
  blocking: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities4;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  id: number;
  id_str: string;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  notifications: boolean;
  profile_banner_url: string;
  profile_image_extensions_media_color: ProfileImageExtensionsMediaColor2;
  profile_image_url_https: string;
  protected: boolean;
  screen_name: string;
  show_all_inline_media: boolean;
  statuses_count: number;
  time_zone: string;
  translator_type: string;
  url: string;
  utc_offset: number;
  verified: boolean;
  withheld_in_countries: string[];
  withheld_scope: string;
  is_blue_verified: boolean;
}

interface Rgb9 {
  blue: number;
  green: number;
  red: number;
}

interface Palette9 {
  percentage: number;
  rgb: Rgb9;
}

interface ExtMediaColor {
  palette: Palette9[];
}

interface ExtMediaAvailability {
  status: string;
}

interface Tag3 {
  user_id: string;
  name: string;
  screen_name: string;
  type: string;
}

interface All3 {
  tags: Tag3[];
}

interface Face9 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Large5 {
  faces: Face9[];
}

interface Face10 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Medium8 {
  faces: Face10[];
}

interface Face11 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Small5 {
  faces: Face11[];
}

interface Face12 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Orig3 {
  faces: Face12[];
}

interface Features4 {
  all: All3;
  large: Large5;
  medium: Medium8;
  small: Small5;
  orig: Orig3;
}

interface Large6 {
  h: number;
  w: number;
  resize: string;
}

interface Medium9 {
  h: number;
  w: number;
  resize: string;
}

interface Small6 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb3 {
  h: number;
  w: number;
  resize: string;
}

interface Sizes3 {
  large: Large6;
  medium: Medium9;
  small: Small6;
  thumb: Thumb3;
}

interface FocusRect3 {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface OriginalInfo3 {
  height: number;
  width: number;
  focus_rects: FocusRect3[];
}

interface AdditionalMediaInfo {
  monetizable: boolean;
}

interface MediaStats {
  viewCount: number;
}

interface Variant {
  bitrate: number;
  content_type: string;
  url: string;
}

interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

interface Medium7 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  ext_media_color: ExtMediaColor;
  ext_media_availability: ExtMediaAvailability;
  features: Features4;
  sizes: Sizes3;
  original_info: OriginalInfo3;
  additional_media_info: AdditionalMediaInfo;
  mediaStats: MediaStats;
  video_info: VideoInfo;
  ext_alt_text: string;
}

interface ExtendedEntities {
  media: Medium7[];
}

interface SelfThread {
  id_str: string;
}

interface RetweetedStatus {
  id: number;
  location: string;
  card: Card2;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: Entities3;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  id_str: string;
  lang: string;
  permalink: string;
  possibly_sensitive: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  text: string;
  user: User2;
  extended_entities: ExtendedEntities;
  in_reply_to_name: string;
  in_reply_to_screen_name: string;
  in_reply_to_user_id_str: string;
  self_thread: SelfThread;
}

interface AdditionalMediaInfo2 {
  monetizable: boolean;
}

interface Rgb10 {
  blue: number;
  green: number;
  red: number;
}

interface Palette10 {
  percentage: number;
  rgb: Rgb10;
}

interface ExtMediaColor2 {
  palette: Palette10[];
}

interface MediaStats2 {
  viewCount: number;
}

interface ExtMediaAvailability2 {
  status: string;
}

interface Tag4 {
  user_id: string;
  name: string;
  screen_name: string;
  type: string;
}

interface All4 {
  tags: Tag4[];
}

interface Face13 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Large7 {
  faces: Face13[];
}

interface Face14 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Medium11 {
  faces: Face14[];
}

interface Face15 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Small7 {
  faces: Face15[];
}

interface Face16 {
  x: number;
  y: number;
  h: number;
  w: number;
}

interface Orig4 {
  faces: Face16[];
}

interface Features5 {
  all: All4;
  large: Large7;
  medium: Medium11;
  small: Small7;
  orig: Orig4;
}

interface Large8 {
  h: number;
  w: number;
  resize: string;
}

interface Medium12 {
  h: number;
  w: number;
  resize: string;
}

interface Small8 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb4 {
  h: number;
  w: number;
  resize: string;
}

interface Sizes4 {
  large: Large8;
  medium: Medium12;
  small: Small8;
  thumb: Thumb4;
}

interface FocusRect4 {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface OriginalInfo4 {
  height: number;
  width: number;
  focus_rects: FocusRect4[];
}

interface Variant2 {
  bitrate: number;
  content_type: string;
  url: string;
}

interface VideoInfo2 {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant2[];
}

interface Medium10 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  additional_media_info: AdditionalMediaInfo2;
  ext_media_color: ExtMediaColor2;
  mediaStats: MediaStats2;
  ext_media_availability: ExtMediaAvailability2;
  features: Features5;
  sizes: Sizes4;
  original_info: OriginalInfo4;
  video_info: VideoInfo2;
  source_status_id_str: string;
  source_user_id_str: string;
}

interface ExtendedEntities2 {
  media: Medium10[];
}

interface SelfThread2 {
  id_str: string;
}

interface UserMention3 {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

interface Url8 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Large9 {
  h: number;
  w: number;
  resize: string;
}

interface Medium14 {
  h: number;
  w: number;
  resize: string;
}

interface Small9 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb5 {
  h: number;
  w: number;
  resize: string;
}

interface Sizes5 {
  large: Large9;
  medium: Medium14;
  small: Small9;
  thumb: Thumb5;
}

interface OriginalInfo5 {
  height: number;
  width: number;
}

interface Medium13 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: string;
  url: string;

  sizes: Sizes5;
  original_info: OriginalInfo5;
}

interface Entities5 {
  user_mentions: UserMention3[];
  urls: Url8[];

  media: Medium13[];
}

interface AdditionalMediaInfo3 {
  monetizable: boolean;
}

interface Rgb11 {
  blue: number;
  green: number;
  red: number;
}

interface Palette11 {
  percentage: number;
  rgb: Rgb11;
}

interface ExtMediaColor3 {
  palette: Palette11[];
}

interface MediaStats3 {
  viewCount: number;
}

interface ExtMediaAvailability3 {
  status: string;
}

interface Large10 {
  h: number;
  w: number;
  resize: string;
}

interface Medium16 {
  h: number;
  w: number;
  resize: string;
}

interface Small10 {
  h: number;
  w: number;
  resize: string;
}

interface Thumb6 {
  h: number;
  w: number;
  resize: string;
}

interface Sizes6 {
  large: Large10;
  medium: Medium16;
  small: Small10;
  thumb: Thumb6;
}

interface OriginalInfo6 {
  height: number;
  width: number;
}

interface Variant3 {
  bitrate: number;
  content_type: string;
  url: string;
}

interface VideoInfo3 {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant3[];
}

interface Medium15 {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  additional_media_info: AdditionalMediaInfo3;
  ext_media_color: ExtMediaColor3;
  mediaStats: MediaStats3;
  ext_media_availability: ExtMediaAvailability3;

  sizes: Sizes6;
  original_info: OriginalInfo6;
  video_info: VideoInfo3;
}

interface ExtendedEntities3 {
  media: Medium15[];
}

interface Description5 {
  urls: string[];
}

interface Url10 {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

interface Url9 {
  urls: Url10[];
}

interface Entities6 {
  description: Description5;
  url: Url9;
}

interface Rgb12 {
  blue: number;
  green: number;
  red: number;
}

interface Palette12 {
  percentage: number;
  rgb: Rgb12;
}

interface ProfileImageExtensionsMediaColor3 {
  palette: Palette12[];
}

interface User3 {
  blocking: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities6;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  id: number;
  id_str: string;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  notifications: boolean;
  profile_banner_url: string;
  profile_image_extensions_media_color: ProfileImageExtensionsMediaColor3;
  profile_image_url_https: string;
  protected: boolean;
  screen_name: string;
  show_all_inline_media: boolean;
  statuses_count: number;
  time_zone: string;
  translator_type: string;
  url: string;
  utc_offset: number;
  verified: boolean;
  withheld_in_countries: string[];
  withheld_scope: string;
  is_blue_verified: boolean;
}

interface SelfThread3 {
  id_str: string;
}

interface QuotedStatus {
  id: number;
  location: string;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: Entities5;
  extended_entities: ExtendedEntities3;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  id_str: string;
  lang: string;
  permalink: string;
  possibly_sensitive: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  text: string;
  user: User3;
  self_thread: SelfThread3;
}

interface QuotedStatusPermalink {
  display: string;
  expanded: string;
  url: string;
}

interface Tweet {
  id: number;
  location: string;
  card: Card;
  conversation_id_str: string;
  created_at: string;
  display_text_range: number[];
  entities: Entities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  id_str: string;
  lang: string;
  permalink: string;
  possibly_sensitive: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  text: string;
  user: User;
  retweeted_status: RetweetedStatus;
  extended_entities: ExtendedEntities2;
  in_reply_to_name: string;
  in_reply_to_screen_name: string;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id_str: string;
  self_thread: SelfThread2;
  is_quote_status?: boolean;
  quoted_status: QuotedStatus;
  quoted_status_id_str: string;
  quoted_status_permalink: QuotedStatusPermalink;
}

interface Content {
  tweet: Tweet;
}

interface Entry {
  type: string;
  entry_id: string;
  sort_index: string;
  content: Content;
}

interface Timeline {
  entries: Entry[];
}

interface HeaderProps {
  screenName: string;
}

interface PageProps {
  contextProvider: ContextProvider;
  lang: string;
  maxHeight?: string;
  showHeader: boolean;
  hideBorder: boolean;
  hideFooter: boolean;
  hideScrollBar: boolean;
  transparent: boolean;
  timeline: Timeline;
  headerProps: HeaderProps;
}

interface Props {
  pageProps: PageProps;
  __N_SSP: boolean;
}

interface Query {
  screenName: string;
}

export interface TwitterFeed {
  props: Props;
  page: string;
  query: Query;
  buildId: string;
  assetPrefix: string;
  isFallback: boolean;
  gssp: boolean;
  customServer: boolean;
}
