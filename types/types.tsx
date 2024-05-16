export type TestimonialItem = {
    img: { width: number, height: number, src: string },
    quote: string,
    name: string,
    role: string
};

export type ClientSliderItem = {
    src: string
    name: string
    height: number
    width: number
}

export interface Posts {
    nodes:    PostsNode[];
    pageInfo: PageInfo;
}

export interface PostsNode {
    content:      string;
    date:          Date;
    slug:          string;
    title:         string;
    excerpt:       string;
    featuredImage: FeaturedImage | null;
    categories:    Categories;
}

export interface Categories {
    nodes: CategoriesNode[];
}

export interface CategoriesNode {
    slug: string;
}

export interface FeaturedImage {
    node: FeaturedImageNode;
}

export interface FeaturedImageNode {
    mediaDetails: MediaDetails;
}

export interface MediaDetails {
    file:  string;
    sizes: Size[];
}

export interface Size {
    sourceUrl: string;
    width:     string;
    height:    string;
}

export interface PageInfo {
    endCursor:       string;
    hasNextPage:     boolean;
    hasPreviousPage: boolean;
    startCursor:     string;
}
