import { LeadOpportunityInterface } from 'interfaces/lead-opportunity';
import { OnlineCommunityInterface } from 'interfaces/online-community';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  lead_opportunity?: LeadOpportunityInterface[];
  online_community?: OnlineCommunityInterface[];
  user?: UserInterface;
  _count?: {
    lead_opportunity?: number;
    online_community?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
