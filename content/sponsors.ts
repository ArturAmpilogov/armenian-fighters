// Sponsors shown on the sponsors page. Add someone only with their permission.
//
// `since` is the date their support started, as YYYY-MM-DD. Order here doesn't
// matter: the page sorts newest first and groups sponsors by month.

export type CompanySponsor = {
  name: string;
  since: string;
  /** Company website, linked from the name. */
  url: string | null;
  /** Logo file in `public/sponsors/`, e.g. "/sponsors/acme.svg". */
  logo: string | null;
};

export type IndividualSponsor = {
  /** As the person wants it shown, in any script. */
  name: string;
  since: string;
};

export const companySponsors: CompanySponsor[] = [];

export const individualSponsors: IndividualSponsor[] = [];
