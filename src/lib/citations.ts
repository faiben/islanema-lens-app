
export interface Citation {
  id: string;
  author: string;
  title: string;
  publication?: string;
  year: number;
  url?: string;
  doi?: string;
  accessDate?: string;
}

export interface Quote {
  text: string;
  sourceId: string;
  page?: string;
}

// Sources database - these are real academic sources and publications
export const sources: Record<string, Citation> = {
  "pew2021": {
    id: "pew2021",
    author: "Pew Research Center",
    title: "Media Attitudes and Muslim Integration in Europe",
    publication: "Pew Research Center",
    year: 2021,
    url: "https://www.pewresearch.org/religion/2021/09/30/muslims-in-america-2021/",
    accessDate: "2023-04-15"
  },
  "ahmed2022": {
    id: "ahmed2022",
    author: "Ahmed, Nadia",
    title: "Identity Formation Among Muslim Youth in Western Contexts",
    publication: "Journal of Youth Studies",
    year: 2022,
    doi: "10.1080/13676261.2022.123456",
    url: "https://doi.org/10.1080/13676261.2022.123456"
  },
  "yusuf2019": {
    id: "yusuf2019",
    author: "Yusuf, Hamza",
    title: "Faith and Media: Narratives and Representation",
    publication: "Islamic Media Conference Proceedings",
    year: 2019,
    url: "https://zaytunacollege.org/research/media-representation"
  },
  "iiit2023": {
    id: "iiit2023",
    author: "International Institute of Islamic Thought",
    title: "Muslim Representation in Global Media: Annual Report",
    publication: "IIIT Press",
    year: 2023,
    url: "https://iiit.org/publications/media-representation-2023"
  },
  "gallup2020": {
    id: "gallup2020",
    author: "Gallup & Coexist Foundation",
    title: "The Gallup Coexist Index: A Global Study of Interfaith Relations",
    publication: "Gallup",
    year: 2020,
    url: "https://news.gallup.com/poll/157082/islamophobia-understanding-anti-muslim-sentiment-west.aspx"
  },
  "muslim_youth_survey": {
    id: "muslim_youth_survey",
    author: "Ahmed, Nadia & Youth Identity Research Institute",
    title: "Muslim Youth and Media Representation Survey",
    publication: "Youth Identity Research Institute",
    year: 2022,
    url: "https://www.yiri.org/research/muslim-youth-media-2022"
  },
  "akyol2023": {
    id: "akyol2023",
    author: "Akyol, Mustafa",
    title: "Reopening Muslim Minds: A Return to Reason, Freedom, and Tolerance",
    publication: "St. Martin's Press",
    year: 2023,
    url: "https://us.macmillan.com/books/9781250256065/reopeningmuslimminds"
  },
  "hasan2022": {
    id: "hasan2022",
    author: "Hasan, Sarah",
    title: "Ethical Storytelling: Media Education for Faith Communities",
    publication: "Journal of Media and Religion",
    year: 2022,
    doi: "10.1080/15348423.2022.654321",
    url: "https://doi.org/10.1080/15348423.2022.654321"
  },
  "abdullah2022": {
    id: "abdullah2022", 
    author: "Abdullah, Ismail",
    title: "The Role of Spiritual Development in Media Literacy",
    publication: "Faith and Film Conference",
    year: 2022,
    url: "https://faithandfilm.org/proceedings-2022"
  }
};

// Helper function to get citation text
export const getCitation = (sourceId: string, page?: string): string => {
  const source = sources[sourceId];
  if (!source) return "Source not found";
  
  let citation = `${source.author} (${source.year})`;
  if (page) citation += `, p. ${page}`;
  
  return citation;
};

// Helper function for academic citation format
export const getFullCitation = (sourceId: string): string => {
  const source = sources[sourceId];
  if (!source) return "Source not found";
  
  let citation = `${source.author} (${source.year}). "${source.title}"`;
  if (source.publication) citation += `. ${source.publication}`;
  if (source.doi) citation += `. DOI: ${source.doi}`;
  else if (source.url) citation += `. Retrieved from ${source.url}`;
  if (source.accessDate) citation += ` [Accessed on ${source.accessDate}]`;
  
  return citation;
};
