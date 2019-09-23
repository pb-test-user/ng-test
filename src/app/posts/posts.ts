
// interfaces generated with http://www.json2ts.com
export interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

export interface RedditVideo {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Oembed {
    provider_url: string;
    title: string;
    type: string;
    html: string;
    height: number;
    width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    description: string;
    author_name: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    url: string;
}

export interface SecureMedia {
    reddit_video: RedditVideo;
    oembed: Oembed;
    type: string;
}

export interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url: string;
    height?: number;
}

export interface Gildings {
    gid_1: number;
    gid_2: number;
    gid_3: number;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Source2 {
    url: string;
    width: number;
    height: number;
}

export interface Resolution2 {
    url: string;
    width: number;
    height: number;
}

export interface Gif {
    source: Source2;
    resolutions: Resolution2[];
}

export interface Source3 {
    url: string;
    width: number;
    height: number;
}

export interface Resolution3 {
    url: string;
    width: number;
    height: number;
}

export interface Mp4 {
    source: Source3;
    resolutions: Resolution3[];
}

export interface Variants {
    gif: Gif;
    mp4: Mp4;
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface RedditVideoPreview {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
    reddit_video_preview: RedditVideoPreview;
}

export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
}

export interface AllAwarding {
    count: number;
    is_enabled: boolean;
    subreddit_id: string;
    description: string;
    end_date?: any;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    id: string;
    icon_height: number;
    resized_icons: ResizedIcon[];
    days_of_drip_extension: number;
    award_type: string;
    start_date?: any;
    coin_price: number;
    icon_width: number;
    subreddit_coin_reward: number;
    name: string;
}

export interface RedditVideo2 {
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Oembed2 {
    provider_url: string;
    title: string;
    type: string;
    html: string;
    height: number;
    width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    description: string;
    author_name: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    url: string;
}

export interface Media {
    reddit_video: RedditVideo2;
    oembed: Oembed2;
    type: string;
}

export interface Data2 {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: number;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width: number;
    author_flair_template_id: string;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    steward_reports: any[];
    author_flair_richtext: any[];
    gildings: Gildings;
    post_hint: string;
    content_categories: string[];
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort: string;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: AllAwarding[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    visited: boolean;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    num_crossposts: number;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    discussion_type?: any;
    media: Media;
    is_video: boolean;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
    before?: any;
}

export interface RedditTopPosts {
    kind: string;
    data: Data;
}

export interface RedditApiRequest {
    after?: string;
    before?: string;
    limit: number;
    count: number;
    show: number;
}
