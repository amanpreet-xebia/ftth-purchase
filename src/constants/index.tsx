export const RE_DIGIT = new RegExp(/^\d+$/);

export const translations = {
  en: {
    header: {
      personal: 'Personal',
      business: 'Business',
      about: 'About',
      complaint: 'Complaint'
    },
    navOption: {
        salamOptHeading: 'Salam Fiber',
      _5gOptHeading: '5G',
      salamOpt: {
        fiber_postpaid: 'Fiber Postpaid',
        fiber_prepaid: 'Fiber Prepaid',
        gamers_pack: 'Gamers pack',
        orbit_family_pack: 'Orbit Family Pack'
      },
      _5gOpt: {
        salam_5g_fwa: 'Salam 5G FWA',
        g_coverage_check: '5G Coverage Check'
      }
    },
    footer: {
      copyright: 'All copyrights reserved to Salam 2023',
    },
    footerLinks: {
      terms: 'Terms & Conditions',
      security: 'Security policy',
      privacy: 'Privacy policy',
      salamVersion: '@ 2022 Salam',
    },
    homeContent: {
      greeting: 'Good Morning',
      salamFiber: 'salam Fiber',
      dueOn: 'due on',
      from: 'From',
      nextInvoice: 'next invoice date',
      yourBill: 'Your bill',
      addOns: 'Add Ons',
      usageOverview: 'Usage Overview',
      salamTv: 'Salam tv',
      orbitTv: 'Orbit tv',
    },
    planOverviewContent: {
      salamFiber: 'salam fiber',

      currentPlan: 'Your Current Plan',
      speed: 'speed Up to ',
      upgrade: 'Upgrade',
      renewal: 'Renewal',
      renewalCost: 'Renewal Cost',
      renewalDate: 'Renewal Date',
      remainingDays: 'Remaining Days',
      renew: 'Renew',
      services: 'Services',
      upgradeDescription: 'Upgrade your package to enjoy faster speed',
      relocate: 'Relocate',
      suspend: 'Suspend',
      addOns: 'Add-Ons',
      serviceNumber: 'service number',
      serviceContent: 'Upgrade your package to enjoy faster speed',
    },
    dashboard: {
      dashboard: 'Dashboard',
      home: 'Home',
      myProfile: 'My Profile',
      plans: 'Plans & Services',
      invoices: 'Invoices',
      store: 'Store',
      support: 'Support',
      signOut: 'Sign Out',
    },
    navLinks: {
      personal: 'Personal',
      business: 'Business',
    },
    heroContent: {
      heroTitle: 'Nice to see you again',
    },
    loginFormContent: {
      dontHaveAccount: 'Dont have an account?',
      subscribe: 'Subscribe',
      phoneNumber: 'Phone Number',
      login: 'Login',
    },
    pageTracker: {
      home: 'Home',
      planOverview: 'Plan Overview',
      upgrade: 'Upgrade',
      profile: 'Profile',
      invoices: 'Invoices',
    },
    next: 'Next',
    typeHere: 'Type here',
    confirm: 'confirm',
    page: {
      registerationHeaderNotification:'Amazing, Salam FTTH is available at your location!',
      enterDetails: 'Enter your details',
      availableRegistration: {
        firstName: 'First Name*',
        lastName: 'Last Name*',
        idNumber: 'Id Number*',
        mobileNumber: "Mobile Number*",
        email: 'Email*'
      },
      fiberPlateLocation: {
        enterPlateDetails: '',
        dropdownOpt: {
          ITC: 'ITC',
          DAWIYAT: 'DAWIYAT',
          STC: 'STC',
          MOBILY: 'MOBILY'
        },
        selectYourProviderHere: 'select your provider here',
        yourPlate: 'Your Plate ID*',
        yourOperator: 'Your current operator*',
        findYourPlateNumber: 'Find your plate number',
        clickFindPlate: 'Click here to see how to find it',
        cantFindYourLocationOnYourPhone: ''
      },
       phoneVerification: {
        verifyDetails: 'Verify your details',
        sendOtpPhone: 'We have send a 6-digit code to your phone ',
        requestCode: 'You can request a new code in '
      },
      EmailVerification: {
        verifyDetails: 'Verify your details',
        sendOtpEmail: 'We have send a 6-digit code to your email ',
        requestCode: 'You can request a new code in '
      },
      BookAppointment: {
        yourOrderNumber: 'Your Salam Fiber order number is',
        bookInstallationDate: 'Now book your installation date',
        availableDates: 'Available Dates',
        chooseATimeslot: 'Choose a timeslot',
        confirm: 'confirm',
        emptyScreen: {
          noAvailableTimeSlots: 'No Available Time Slots',
          noTimeSlotsAreAvailableAtThisLocation: 'No time slots are available at this moment',
          backToSalam: 'Back to Salam'
        }
      },
      purchaseFiberPlan: {
        differentCardTypes: 'Credit/Debit Card',
        sadad: 'SADAD',
        hi: 'hi',
        yesAccept: "Yes, accept!",
        paymentHeaderNotificaion: 'thanks for verifying your details!',
        purchaseDeposit: 'Your purchase requires a deposit',
        acceptSalam: 'I accept Salam’s ',
          termsConditions: 'Terms & Conditions',
          payingDeposit: 'You are paying now as deposit:',
        creditDebit: {
          visa: 'Visa',
          american_express: 'American Express',
          mastercard: 'Mastercard',
          cardType: 'Card type',
          selectCardType: 'Select your card type',
          cardNumber: 'Card Number',
          cardholderName: 'Cardholder Name',
          expiring_date: 'Expiring date',
          cvv: 'CVV',
          
        },
        PayViaSadad: {
          sadad_text: 'You will receive Sadad billing number. ',
        }
      },
       updateAcc: {
        enterDetails: 'Enter your details',
        email: 'Email*',
        password: 'Password'
      },
      OrderSuccessfully: {
        fiberOnWay: 'Your Salam Fiber order is on its way!',
        orderNumber: 'Order number',
        checkEmailForOrder: 'Check your email and contact phone to review the details of your order and the contract. Use this space to provide any other info on the delivery and so on...',
        useOrderInfo: '',
        backToSalam: 'Back to Salam'
      }

    },
    plansCardContent: {
      salam: 'Salam Fiber',
      download: 'Download speed Up to',
      upload: 'Upload speed Up to',
      data: 'Unlimited montly data allowance',
    },
    upgradeScreenContent: {
      upgrade: 'Upgrade Your Plan',
    },
    profileScreenContent: {
      personalInfo: 'Personal Information',
      name: 'Name',
      phone: 'Phone Number',
      nationality: 'Nationality ID',
      email: 'Email',
      edit: 'Edit',
      security: 'Security',
      password: 'Password',
      change: 'Change',
    },
    button: {
      cancel: 'Cancel',
      saveChanges: 'Save Changes',
      download: 'Download',
      pay: 'Pay',
    },
    invoicesContent: {
      invoices: 'Invoices',
      invoicesFor: 'Invoices For',
      invoicesDate: 'Invoices Date',
      amount: 'Amount',
      status: 'Status',
      action: 'Action',
    },
  },
  ar: {
    header: {
      personal: 'شخصي',
      business: 'الأعمال',
      about: 'حول',
      complaint: 'الشكاوى'
    },
    navOption: {
      salamOptHeading: 'Salam Fiber',
      _5gOptHeading: '5G',
      salamOpt: {
        fiber_postpaid: 'Fiber Postpaid',
        fiber_prepaid: 'Fiber Prepaid',
        gamers_pack: 'باقة القيمر',
        orbit_family_pack: 'تحقق من التغطية'
      },
      _5gOpt: {
        salam_5g_fwa: 'Salam 5G FWA',
        g_coverage_check: '5G Coverage Check'
      }
    },
    footer: {
      copyright: 'جميع الحقوق محفوظة لشركة سلام 2023',
    },
    footerLinks: {
      terms: 'البنود و الظروف',
      security: 'السياسة الأمنية',
      privacy: 'سياسة الخصوصية',
      salamVersion: '@ 2022 Salam',
    },
    homeContent: {
      greeting: 'صباح الخير',
      salamFiber: 'ألياف السلام',
      dueOn: 'بسبب',
      from: 'من',
      nextInvoice: 'تاريخ الفاتورة التالية',
      yourBill: 'فاتورتك',
      addOns: 'إضافات',
      usageOverview: 'نظرة عامة على الاستخدام',
      salamTv: 'تلفزيون السلام',
      orbitTv: 'تلفزيون المدار',
    },
    planOverviewContent: {
      salamFiber: 'ألياف السلام',
      currentPlan: 'خطتك الحالية',
      speed: 'سرعة تصل',
      upgrade: 'رفع مستوى',
      renewal: 'التجديد',
      renewalCost: 'تكلفة التجديد',
      renewalDate: 'تاريخ التجديد',
      remainingDays: 'الأيام المتبقية',
      renew: 'تجديد',
      services: 'خدمات',
      upgradeDescription: 'قم بترقية الحزمة الخاصة بك للاستمتاع بسرعة أكبر',
      relocate: 'إنتقل',
      suspend: 'تعليق',
      addOns: 'الإضافات',
      serviceNumber: 'رقم الخدمة',
      serviceContent: 'قم بترقية الحزمة الخاصة بك للاستمتاع بسرعة أكبر',
    },
    dashboard: {
      dashboard: 'لوحة القيادة',
      home: 'الصفحة الرئيسية',
      myProfile: 'ملفي',
      plans: 'الخطط والخدمات',
      invoices: 'الفواتير',
      store: 'متجر',
      support: 'الدعم',
      signOut: 'خروج',
    },
    navLinks: {
      personal: 'شخصي',
      business: 'اعمال',
    },
    heroContent: {
      heroTitle: 'جميل ان اراك مرة اخرى',
    },
    loginFormContent: {
      dontHaveAccount: 'ليس لديك حساب؟',
      subscribe: 'الإشتراك',
      phoneNumber: 'رقم الهاتف',
      login: 'تسجيل الدخول',
    },
    pageTracker: {
      home: 'مسكن',
      planOverview: 'نظرة عامة على الخطة',
      upgrade: 'رفع مستوى',
      profile: 'الملف الشخصي',
      invoices: 'الفواتير',
    },
    next: 'التالي',
    typeHere: 'اكتب هنا',
    page: {
      registerationHeaderNotification:'رائع، خدمة الألياف الضوئية من سلام متوفرة في موقعك',
      enterDetails: 'أدخِل معلوماتك',
      availableRegistration: {
        firstName: 'الإسم الأول',
        lastName: 'الإسم الأخير',
        idNumber: 'رقم الهوية',
        mobileNumber: "رقم الجوال",
        email: 'البريد الإلكتروني'
      },
      fiberPlateLocation: {
        enterPlateDetails: '',
        dropdownOpt: {
          ITC: 'سلام',
          DAWIYAT: 'ضوئيات',
          STC: 'STC',
          MOBILY: 'اكتب هنا'
        },
        selectYourProviderHere: 'اختر مزود الخدمة الحالي من هنا',
        yourPlate: 'رقم لوحتك*',
        yourOperator: 'مزوّد خدمتك الحالي',
        findYourPlateNumber: 'أوجد رقم لوحتك',
        clickFindPlate: 'اضغط هنا لمعرفة طريقة الحصول عليه',
        cantFindYourLocationOnYourPhone: ''
      },
      phoneVerification: {
        verifyDetails: 'التحقق من المعلومات',
        sendOtpPhone: 'تم إرسال رمز تحقق من 6 خانات إلى هاتفك',
        requestCode: 'يمكنك طلب رمز جديد خلال '
      },
      EmailVerification: {
        verifyDetails: 'التحقق من المعلومات',
        sendOtpEmail: 'تم إرسال رمز تحقق من 6 خانات إلى بريدك الإلكتروني',
        requestCode: 'يمكنك طلب رمز جديد خلال '
      },
      BookAppointment: {
        yourOrderNumber: 'رقم طلبك هو',
        bookInstallationDate: 'الان احجز موعد للتركيب',
        availableDates: 'المواعيد المتاحة',
        chooseATimeslot: 'اختر وقت',
        confirm: 'تأكيد',
        emptyScreen: {
          noAvailableTimeSlots: 'No Available Time Slots',
          noTimeSlotsAreAvailableAtThisLocation: 'No time slots are available at this moment',
          backToSalam: 'Back to Salam'
        }
      },
      purchaseFiberPlan: {
        differentCardTypes: 'بطاقة الائتمان',
        sadad: 'سداد',
        hi: 'مرحباً',
        yesAccept: "نعم، أقبل!",
        paymentHeaderNotificaion: 'شكراً لتأكيدك معلوماتك',
        purchaseDeposit: 'عملية الشراء تتطلب مبلغ تأمين',
        acceptSalam: 'أقبل ',
          termsConditions: 'شروط وأحكام سلام',
          payingDeposit: 'انت تدفع الآن كمبلغ تأمين:',
        creditDebit: {
          visa: 'فيزا',
          american_express: 'American Express',
          mastercard: 'ماستركارد',
          cardType: 'نوع البطاقة',
          selectCardType: 'اختر نوع بطاقتك',
          cardNumber: 'رقم البطاقة',
          cardholderName: 'اسم حامل البطاقة',
          expiring_date: 'تاريخ الانتهاء',
          cvv: 'رقم CVV',
          
        },
        payViaSadad: {
          sadadText: 'سيصلك رقم دفع لخدمة سداد',
        }
      },
      updateAcc: {
        enterDetails: 'أدخِل معلوماتك',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور'
      },
      OrderSuccessfully: {
        fiberOnWay: 'طلبك من سلام فايبر في الطريق!',
        orderNumber: 'رقم الطلب',
        checkEmailForOrder: 'تحقق من بريدك الإلكتروني ورقم التواصل لمراجعة تفاصيل طلبك والعقد.',
        useOrderInfo: 'استخدم هذه المساحة لتزويدنا بأي معلومات اخرى بخصوص التوصيل وخلافه.',
        backToSalam: 'العودة إلى موقع سلام'
      }
     
    },
    plansCardContent: {
      salam: 'ألياف السلام',
      download: 'سرعة التنزيل تصل إلى      ',
      upload: 'سرعة تحميل تصل إلى',
      data: 'بدل بيانات شهري غير محدود',
    },
    upgradeScreenContent: {
      upgrade: 'قم بترقية خطتك',
    },
    profileScreenContent: {
      personalInfo: 'معلومات شخصية',
      name: 'اسم',
      phone: 'رقم الهاتف',
      nationality: 'هوية الجنسية',
      email: 'البريد الإلكتروني',
      edit: 'يحرر',
      security: 'حماية',
      password: 'كلمة المرور',
      change: 'يتغيرون',
    },
    button: {
      cancel: 'يلغي',
      saveChanges: 'حفظ التغييرات',
      download: 'تحميل',
      pay: 'يدفع',
    },
    invoicesContent: {
      invoices: 'الفواتير',
      invoicesFor: 'الفواتير',
      invoicesDate: 'تاريخ الفواتير',
      amount: 'مقدار',
      status: 'حالة',
      action: 'عمل',
    },
  },
};