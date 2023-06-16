import * as yup from 'yup';

export const onlineCommunityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  organization_id: yup.string().nullable(),
});
