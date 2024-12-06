const disease = [
  {
    id: 0,
    title: "두통",
    types: [
      {
        id: 1,
        title: "긴장두통",
        content:
          "긴장두통의 확실한 치료법은 없지만, 약국에서 쉽게 구할 수 있는 진통제(아스피린, 아세트아미노펜, 비스테로이드소염진통제)로 통증을 조절할 수 있습니다. 스트레스, 불안, 초조, 우울감, 예민함이 긴장두통과 관련되어 있을 수 있으므로 항우울제, 항불안제 등의 약물이 필요할 때도 있습니다.",
      },
      {
        id: 2,
        title: "편두통",
        content:
          "편두통의 치료 원칙은 크게 두 가지입니다. 편두통이 생기지 않도록 예방하고, 편두통의 전조증상이 생겼다면 빨리 두통이 호전되도록 치료해야 합니다. 약물치료를 통해 편두통의 횟수와 강도를 조절할 수 있으며, 전구기나 전조기까지만 겪고 두통기가 오지 않도록 예방할 수 있습니다. 편두통의 전조증상이 시작되었다면, 우선 아세트아미노펜, 소염진통제가 도움 될 수 있고 여기에 반응이 없다면 트립탄 등의 편두통 치료 약물을 단독 혹은 아세트아미노펜이나 소염진통제와 함께 사용할 수 있습니다. 그러나 트립탄은 혈관 수축 작용이 있어 협심증 등의 혈관 질환이 있는 사람은 사용하지 않아야 하며 그렇지 않더라도 의사와 사용의 필요성, 간격을 잘 상의하여야 합니다. 투약 횟수가 주 3회 이상이 된다면 도리어 약물 과용 두통으로 옮겨갈 수 있어, 예방 약물을 규칙적으로 먹는 예방요법으로 바꾸는 게 나은데, 이때 사용되는 예방 약물로는 베타차단제, 토피라메이트가 있습니다.",
      },
      {
        id: 3,
        title: "군발두통",
        content:
          "아스피린, 아세트아미노펜, 소염진통제는 군발두통에는 효과적이지 않습니다. 산소마스크로 산소를 흡입하는 것이 도움이 되고 이를 위해 가정 또는 이동 시 사용할 산소를 갖추는 것이 좋습니다. 다른 약제로는 피하 주사 또는 비강 내 뿌리는 트립탄제를 사용할 수 있습니다.",
      },
    ],
  },
  {
    id: 1,
    title: "기침",
    types: [
      {
        id: 1,
        title: "상기도감염(감기)",
        content: "200여 가지 이상의 바이러스가 상기도감염을 일으킬 수 있으며,.",
      },
      {
        id: 2,
        title: "급성기관지염",
        content:
          "인플루엔자(Influenza) 바이러스, 파라인플루엔자(parainfluenza) 바이러스.",
      },
      {
        id: 3,
        title: "알레르기비염",
        content:
          "알레르기비염은 기침과 함께 맑은 콧물, 코막힘, 코 및 눈 주위의 가려움증이 주 증상입니다. ",
      },
    ],
  },
];

const symptoms = [
  {
    id: 0,
    title: "두통",
    types: [
      {
        id: 1,
        title: "긴장두통",
        content: [
          "이마 근육, 턱 근육이나 머리와 목 근육이 단단해져 있는지 직접 만져보면 진단에 도움이 됩니다. 두통을 일으킬 수 있는 다른 원인의 감별을 위해 혈압, 시력검사, 두개골 X선 촬영 등을 할 수 있습니다. 필요하다면 CT나 MRI 검사를 합니다. 그 외 검사로는 일반 혈액검사, 갑상샘 검사를 주로 하고, 50세 이상에서는 혈액검사의 적혈구 침강속도(Erythrocyte Sedimentation Rate, ESR)도 혈관염에 의한 두통인지를 확인하는 데 도움이 됩니다.",
        ],
      },
      {
        id: 2,
        title: "편두통",
        content: [
          "편두통은 두통의 양상이 매우 특징적이어서 검사 없이 증상만으로도 충분히 진단할 수 있습니다. 편두통은 먼저 다른 원발두통과 구별해야 하고 뇌에 혈액 공급이 일시적으로 감소해서 나타나는 마비 증상인 일과성 허혈 발작과 같은 뇌혈관질환, 뇌종양, 감염 질환, 약물에 의한 이차두통, 뇌전증발작 증상은 아닌지 확인해야 합니다.",
        ],
      },
      {
        id: 3,
        title: "군발두통",
        content: [
          "편두통처럼 군발두통도 증상이 특징적이어서 이에 대한 자세한 문진으로 진단할 수 있습니다. 그러나 머리나 목의 근골격계 질환이나 편두통, 측두동맥염 등에 의한 통증인지를 감별이 필요합니다.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "기침",
    types: [
      {
        id: 1,
        title: "상기도감염(감기)",
        content: [
          "200여 가지 이상의 바이러스가 상기도감염을 일으킬 수 있으며, 라이노바이러스(rhinovirus), 코로나바이러스(coronavirus), 파라인플루엔자(parainfluenza) 바이러스, 호흡기세포융합바이러스(respiratory syncytial virus), 인플루엔자(influenza) 바이러스, 아데노바이러스(adenovirus), 엔테로바이러스(enterovirus) 등이 대표적입니다. 감기에 걸린 후 2일 이내에 83%의 사람들에서 기침이 발생하며, 14일째에는 26%에서 여전히 기침을 하지만, 3주 정도 되면 대부분 없어집니다. 콧물, 코막힘, 후비루, 재채기, 인후 자극 등의 상기도증상과 발열이나 전신쇠약감, 근육통 같은 전신증상이 발생할 수 있습니다. 감기로 인한 기침은 후비루나 상부호흡기의 기침 반사가 자극되어서 나옵니다. 감기는 바이러스에 의한 것으로, 저절로 좋아지는 경우가 대부분이므로 원인에 대한 특별한 치료는 필요 없고, 증상 완화를 위한 대증요법을 시행합니다.",
        ],
      },
      {
        id: 2,
        title: "급성기관지염",
        content: [
          "인플루엔자(Influenza) 바이러스, 파라인플루엔자(parainfluenza) 바이러스, 호흡기세포융합바이러스(respiratory syncytial virus), 아데노바이러스(adenovirus) 감염이 가장 흔하고, 2차적으로 세균성 감염이 10%미만에서 발생할 수 있습니다. 또한, 찬공기, 먼지, 기도 자극물질, 유해가스 등 비감염성 원인도 있습니다. 흔히 상기도감염 후 기침이 발생하고, 진행하면서 객담(혹은 화농성 객담)이 동반되기도 합니다. 대부분 자연적으로 회복되나 기침과 객담이 2~3주간 지속될 수 있습니다. 급성기관지염은 점막손상 및 염증성 매개인자 등이 복합적으로 관여하여 일시적인 기도폐쇄나 기관지 과민성을 유발할 수 있습니다. 급성기관지염은 임상적으로 진단하지만, 3주 이상 지속되는 경우에는 천식 등의 다른 질환을 고려해야 합니다.",
        ],
      },
      {
        id: 3,
        title: "알레르기비염",
        content: [
          "알레르기비염은 기침과 함께 맑은 콧물, 코막힘, 코 및 눈 주위의 가려움증이 주 증상입니다. 심한 경우에는 눈부심, 과도한 눈물, 전두통(이마두통) 등의 증상이 동반되기도 합니다. 집먼지진드기, 꽃가루나 동물의 털과 같은 특정 알레르기 항원에 의해 증상이 유발되며, 이러한 항원에 대한 과민성은 유전적 경향이 있습니다. 코 안을 진찰해보면 점막이 부어 있고, 창백하며, 수양성 또는 점액성 분비물이 고여 있는 것을 볼 수 있습니다. 농성 분비물이 있으면 이차감염으로 인한 부비동염으로 생각하고, 이를 같이 치료하여야 합니다.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "마른기침",
    sections: [
      {
        title: "증상",
        content: [
          "1. 목 뒤가 간지럽고 건조하며, 가벼운 마른기침이 시작됨",
          "2. 기침이 잦아지고 목이 따갑거나 쉰 목소리가 나타남",
          "3. 밤에 기침이 심해지고 가슴이 답답하며 수면장애가 발생",
          "4. 지속적인 기침으로 인한 피로감, 두통, 근육통이 동반됨",
        ],
      },
    ],
  },
];

const summary = [
  {
    id: 0,
    title: "두통",
    content: [
      "두통은 두개골 주위의 피부와 근육, 혈관, 뇌 속 신경세포에 영향을 주는 원인을 가진 증상입니다.",
    ],
  },
  {
    id: 1,
    title: "기침",
    content: ["기침은 기도 속 점막이 자극되어 발생하는 증상입니다."],
  },
  {
    id: 2,
    title: "마른기침",
    content: "마른기침은 기도 속 점막이 자극되어 발생하는 증상입니다.",
  },
];

const medicines = [
  {
    id: 1,
    name: "레보투스",
    type: "진해거담제",
    description: "기침을 가라앉히고 가래를 묽게 하는데 효과적",
    caution: "임산부, 수유부는 복용 전 의사와 상담 필요",
  },
  {
    id: 2,
    name: "코데날시럽",
    type: "기침억제제",
    description: "마른기침을 진정시키고 기도 자극을 감소",
    caution: "운전 및 기계조작 시 주의, 졸음 유발 가능",
  },
  {
    id: 3,
    name: "액티피드",
    type: "항히스타민제",
    description: "알레르기성 기침 증상 완화와 가래 감소",
    caution: "복용 후 졸음이 올 수 있으며 장시간 운전 금지",
  },
  {
    id: 4,
    name: "뮤코졸정",
    type: "점액용해제",
    description: "기도 점액을 묽게 하여 기침 증상 완화",
    caution: "위장장애가 있는 경우 식후 복용 권장",
  },
];

export { symptoms, medicines, disease, summary };
