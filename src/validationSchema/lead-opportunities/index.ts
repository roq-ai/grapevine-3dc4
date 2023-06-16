import * as yup from 'yup';

export const leadOpportunityValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
