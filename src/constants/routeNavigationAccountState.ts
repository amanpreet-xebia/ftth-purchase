import AppRoutes from '../constants/appRoutes';

export const fiberOrderStatesRoute = (state: string): string => {
  const map: Map<string, string> = new Map([
    ['odb_selection', AppRoutes.fiberPlateLocationPick],
    ['account_creation', AppRoutes.fiberRegistration], 
    ['mobile_verification', AppRoutes.phoneVerification],
    ['email_verification', AppRoutes.emailVerification],
    ['payment', AppRoutes.purchaseFiberPlans],
    ['installation_schedule', AppRoutes.bookAppointment],
    ['account_update', AppRoutes.updateAccount],
    ['pending', AppRoutes.orderSuccessfully],
    ['approved', AppRoutes.fiberRegistration],
    ['rejected', AppRoutes.fiberRegistration],
    ['completed', AppRoutes.fiberRegistration]
  ]);

  return map.get(state) || AppRoutes.fiberRegistration;
};

export const getFiberRoutKey = (state: string): string => {
  const map: Map<string, string> = new Map([
    //  ['odb_selection', AppRoutes.fiberPlateLocationPick],
    [AppRoutes.fiberPlateLocationPick, 'odb_selection'],
    [AppRoutes.fiberRegistration, 'account_creation'],
    [AppRoutes.phoneVerification, 'mobile_verification'],
    [AppRoutes.emailVerification, 'email_verification'],
    [AppRoutes.purchaseFiberPlans, 'payment'],
    [AppRoutes.bookAppointment, 'installation_schedule'],
    [AppRoutes.updateAccount, 'account_update'],
    [AppRoutes.orderSuccessfully, 'pending']
  ]);

  return map.get(state) || AppRoutes.fiberRegistration;
};

/* 

{
   "states":[
      "odb_selection",
      "account_creation",
      "mobile_verification",
      "email_verification",
      "payment",
      "installation_schedule",
      "pending",
      "approved",
      "rejected",
      "completed"
   ],
   "initial_state":"odb_selection",
   "transitions":{
      "select":{
         "from":[
            "odb_selection"
         ],
         "to":"account_creation"
      },
      "create":{
         "from":[
            "account_creation"
         ],
         "to":"mobile_verification"
      },
      "verify_mobile":{
         "from":[
            "mobile_verification"
         ],
         "to":"email_verification"
      },
      "verify_email":{
         "from":[
            "email_verification"
         ],
         "to":"payment"
      },
      "pay":{
         "from":[
            "payment"
         ],
         "to":"installation_schedule"
      },
      "schedule":{
         "from":[
            "installation_schedule"
         ],
         "to":"pending"
      },
      "approve":{
         "from":[
            "pending"
         ],
         "to":"approved"
      },
      "complete":{
         "from":[
            "approved"
         ],
         "to":"completed"
      },
      "reject":{
         "from":[
            "pending"
         ],
         "to":"rejected"
      }
   }
}
*/
