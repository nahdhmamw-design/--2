const MEDS = [
  {
    "trade_en": "Paracetamol",
    "trade_ar": "بانادول",
    "ingredient": "Paracetamol",
    "class": "Analgesic/Antipyretic",
    "dose_adult": "500 mg - 1 g every 4–6 hrs (max ~4 g/24h)",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ibuprofen",
    "trade_ar": "بروفين",
    "ingredient": "Ibuprofen",
    "class": "NSAID Analgesic",
    "dose_adult": "200–400 mg every 4–6 hrs",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Diclofenac",
    "trade_ar": "فولتارين",
    "ingredient": "Diclofenac",
    "class": "NSAID",
    "dose_adult": "50 mg two or three times daily (depends)",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Aspirin",
    "trade_ar": "أسبرين",
    "ingredient": "Aspirin",
    "class": "Analgesic/Antiplatelet",
    "dose_adult": "75-300 mg (depends)",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Amoxicillin",
    "trade_ar": "أموكسيل",
    "ingredient": "Amoxicillin",
    "class": "Antibiotic",
    "dose_adult": "500 mg three times daily (typical)",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Amoxicillin-clavulanate",
    "trade_ar": "أموكس/أوجمنتين",
    "ingredient": "Amoxicillin+Clavulanic acid",
    "class": "Antibiotic",
    "dose_adult": "625 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Azithromycin",
    "trade_ar": "أزيثروميسين",
    "ingredient": "Azithromycin",
    "class": "Antibiotic",
    "dose_adult": "500 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ciprofloxacin",
    "trade_ar": "سيبروفلوكساسين",
    "ingredient": "Ciprofloxacin",
    "class": "Antibiotic",
    "dose_adult": "500 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Metronidazole",
    "trade_ar": "ميترونيدازول",
    "ingredient": "Metronidazole",
    "class": "Antibiotic/Antiprotozoal",
    "dose_adult": "400-500 mg every 8–12 hrs",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Clarithromycin",
    "trade_ar": "كلاريثروميسين",
    "ingredient": "Clarithromycin",
    "class": "Antibiotic",
    "dose_adult": "500 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Cefalexin",
    "trade_ar": "سيفالكسين",
    "ingredient": "Cephalexin",
    "class": "Antibiotic",
    "dose_adult": "500 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Doxycycline",
    "trade_ar": "دوكسيسيكلين",
    "ingredient": "Doxycycline",
    "class": "Antibiotic",
    "dose_adult": "100 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Paracetamol syrup",
    "trade_ar": "بانادول شراب",
    "ingredient": "Paracetamol syrup",
    "class": "Analgesic (syrup)",
    "dose_adult": "120 mg/5ml",
    "form": "syrup",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Amoxicillin syrup",
    "trade_ar": "أموكس شراب",
    "ingredient": "Amoxicillin syrup",
    "class": "Antibiotic (pediatric)",
    "dose_adult": "125 mg/5ml",
    "form": "syrup",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Cetirizine",
    "trade_ar": "زيرتك",
    "ingredient": "Cetirizine",
    "class": "Antihistamine",
    "dose_adult": "10 mg once daily",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Loratadine",
    "trade_ar": "لوراتادين",
    "ingredient": "Loratadine",
    "class": "Antihistamine",
    "dose_adult": "10 mg once daily",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Fexofenadine",
    "trade_ar": "فيكسوفينادين",
    "ingredient": "Fexofenadine",
    "class": "Antihistamine",
    "dose_adult": "180 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Diphenhydramine",
    "trade_ar": "ديفينهيدرامين",
    "ingredient": "Diphenhydramine",
    "class": "Antihistamine",
    "dose_adult": "25-50 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Pseudoephedrine",
    "trade_ar": "سودوافدرين",
    "ingredient": "Pseudoephedrine",
    "class": "Decongestant",
    "dose_adult": "60 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Phenylephrine",
    "trade_ar": "فينيلفرين",
    "ingredient": "Phenylephrine",
    "class": "Decongestant",
    "dose_adult": "10 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Salbutamol inhaler",
    "trade_ar": "سالبيوتامول",
    "ingredient": "Salbutamol",
    "class": "Bronchodilator",
    "dose_adult": "100 mcg inhaler",
    "form": "inhaler",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ipratropium inhaler",
    "trade_ar": "إبراتروبيوم",
    "ingredient": "Ipratropium",
    "class": "Bronchodilator",
    "dose_adult": "20 mcg inhaler",
    "form": "inhaler",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Budesonide inhaler",
    "trade_ar": "بوديزونايد",
    "ingredient": "Budesonide",
    "class": "Inhaled steroid",
    "dose_adult": "200 mcg inhaler",
    "form": "inhaler",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Omeprazole",
    "trade_ar": "أوميبرازول",
    "ingredient": "Omeprazole",
    "class": "PPI",
    "dose_adult": "20 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Pantoprazole",
    "trade_ar": "بانتوبرازول",
    "ingredient": "Pantoprazole",
    "class": "PPI",
    "dose_adult": "40 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Lansoprazole",
    "trade_ar": "لانسوبرازول",
    "ingredient": "Lansoprazole",
    "class": "PPI",
    "dose_adult": "30 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ranitidine",
    "trade_ar": "رانيتيدين",
    "ingredient": "Ranitidine",
    "class": "H2 blocker",
    "dose_adult": "150 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Maalox",
    "trade_ar": "مالوكس",
    "ingredient": "Aluminium & Magnesium hydroxide",
    "class": "Antacid",
    "dose_adult": "Per product label",
    "form": "liquid",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Gaviscon",
    "trade_ar": "جافيسكون",
    "ingredient": "Alginate antacid",
    "class": "Antacid",
    "dose_adult": "Chewable tablet/liquid",
    "form": "liquid",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Metformin",
    "trade_ar": "ميتفورمين",
    "ingredient": "Metformin",
    "class": "Antidiabetic",
    "dose_adult": "500 mg once or twice daily",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Glimepiride",
    "trade_ar": "جليمبريد",
    "ingredient": "Glimepiride",
    "class": "Antidiabetic",
    "dose_adult": "1-4 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Insulin (human)",
    "trade_ar": "أنسولين",
    "ingredient": "Insulin",
    "class": "Antidiabetic (injectable)",
    "dose_adult": "Units — per prescription",
    "form": "injection",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Sitagliptin",
    "trade_ar": "سيتاجليبتي",
    "ingredient": "Sitagliptin",
    "class": "Antidiabetic",
    "dose_adult": "100 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Amlodipine",
    "trade_ar": "أملوديبين",
    "ingredient": "Amlodipine",
    "class": "Antihypertensive",
    "dose_adult": "5-10 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Lisinopril",
    "trade_ar": "ليزينوبريل",
    "ingredient": "Lisinopril",
    "class": "Antihypertensive",
    "dose_adult": "10-20 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Losartan",
    "trade_ar": "لوسارتان",
    "ingredient": "Losartan",
    "class": "Antihypertensive",
    "dose_adult": "50 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Hydrochlorothiazide",
    "trade_ar": "هيدروكلوروثيازيد",
    "ingredient": "Hydrochlorothiazide",
    "class": "Diuretic",
    "dose_adult": "25 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Atorvastatin",
    "trade_ar": "أتورفاستاتين",
    "ingredient": "Atorvastatin",
    "class": "Statin",
    "dose_adult": "10-40 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Simvastatin",
    "trade_ar": "سيمفاستاتين",
    "ingredient": "Simvastatin",
    "class": "Statin",
    "dose_adult": "10-40 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Warfarin",
    "trade_ar": "وورفارين",
    "ingredient": "Warfarin",
    "class": "Anticoagulant",
    "dose_adult": "Dose individualized (mg)",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Heparin",
    "trade_ar": "هيبارين",
    "ingredient": "Heparin",
    "class": "Anticoagulant (injectable)",
    "dose_adult": "Per prescription",
    "form": "injection",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Clopidogrel",
    "trade_ar": "كلوبيدوجريل",
    "ingredient": "Clopidogrel",
    "class": "Antiplatelet",
    "dose_adult": "75 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Tamsulosin",
    "trade_ar": "تامسولوسين",
    "ingredient": "Tamsulosin",
    "class": "BPH agent",
    "dose_adult": "0.4 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Sodium chloride nasal drops",
    "trade_ar": "نقط ملح للأنف",
    "ingredient": "Sodium chloride",
    "class": "Nasal drops",
    "dose_adult": "0.9% solution",
    "form": "drops",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Oxymetazoline nasal spray",
    "trade_ar": "أوكسي ميتازولين",
    "ingredient": "Oxymetazoline",
    "class": "Nasal decongestant",
    "dose_adult": "0.05% spray",
    "form": "spray",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Naproxen",
    "trade_ar": "نابروكسين",
    "ingredient": "Naproxen",
    "class": "NSAID",
    "dose_adult": "250-500 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Codeine/paracetamol",
    "trade_ar": "كودين+باراسيتامول",
    "ingredient": "Codeine+Paracetamol",
    "class": "Opioid combo",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Tramadol",
    "trade_ar": "ترامادول",
    "ingredient": "Tramadol",
    "class": "Opioid analgesic",
    "dose_adult": "50-100 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Morphine",
    "trade_ar": "مورفين",
    "ingredient": "Morphine",
    "class": "Opioid (injectable/PO)",
    "dose_adult": "By prescription",
    "form": "injection",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Prednisolone",
    "trade_ar": "بريدنيزولون",
    "ingredient": "Prednisolone",
    "class": "Systemic steroid",
    "dose_adult": "5-30 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Hydrocortisone topical",
    "trade_ar": "هيدروكورتيزون",
    "ingredient": "Hydrocortisone",
    "class": "Topical steroid",
    "dose_adult": "Cream/ointment",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Clobetasol topical",
    "trade_ar": "كلوبتاسول",
    "ingredient": "Clobetasol",
    "class": "High-potency topical steroid",
    "dose_adult": "Cream/ointment",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Mupirocin cream",
    "trade_ar": "موبيروسين",
    "ingredient": "Mupirocin",
    "class": "Topical antibiotic",
    "dose_adult": "Apply to affected area",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Clotrimazole cream",
    "trade_ar": "كلوتريمازول",
    "ingredient": "Clotrimazole",
    "class": "Antifungal topical",
    "dose_adult": "Apply as directed",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Fluconazole",
    "trade_ar": "فلوكونازول",
    "ingredient": "Fluconazole",
    "class": "Antifungal oral",
    "dose_adult": "150 mg single dose",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Nystatin suspension",
    "trade_ar": "نيستاتين شراب",
    "ingredient": "Nystatin",
    "class": "Antifungal oral",
    "dose_adult": "Oral suspension per product",
    "form": "syrup",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Erythromycin topical",
    "trade_ar": "ايريثرومايسين كريم",
    "ingredient": "Erythromycin",
    "class": "Topical antibiotic",
    "dose_adult": "Apply as directed",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Benzoyl peroxide",
    "trade_ar": "بنزويل بيروكسيد",
    "ingredient": "Benzoyl peroxide",
    "class": "Topical acne agent",
    "dose_adult": "Apply as directed",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Isotretinoin",
    "trade_ar": "ايزوتريتينوين",
    "ingredient": "Isotretinoin",
    "class": "Acne systemic (teratogenic)",
    "dose_adult": "Per specialist",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Tetracycline",
    "trade_ar": "تتراسيكلين",
    "ingredient": "Tetracycline",
    "class": "Antibiotic",
    "dose_adult": "100 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Nitrofurantoin",
    "trade_ar": "نيتروفورانتوين",
    "ingredient": "Nitrofurantoin",
    "class": "Antibiotic (UTI)",
    "dose_adult": "100 mg twice daily",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Phenoxymethylpenicillin",
    "trade_ar": "بنسلين فينكس",
    "ingredient": "Phenoxymethylpenicillin",
    "class": "Antibiotic",
    "dose_adult": "500 mg",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Trimethoprim",
    "trade_ar": "تريميثوبريم",
    "ingredient": "Trimethoprim",
    "class": "Antibiotic (UTI)",
    "dose_adult": "200 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Co-trimoxazole",
    "trade_ar": "سلفاميزوكسازول",
    "ingredient": "Co-trimoxazole",
    "class": "Antibiotic",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ceftriaxone",
    "trade_ar": "سيفترياكسون",
    "ingredient": "Ceftriaxone",
    "class": "Antibiotic (injectable)",
    "dose_adult": "Per prescription",
    "form": "injection",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Valaciclovir",
    "trade_ar": "فالاتسيكلوفير",
    "ingredient": "Valaciclovir",
    "class": "Antiviral",
    "dose_adult": "500 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Oseltamivir",
    "trade_ar": "أوسيلتاميفير",
    "ingredient": "Oseltamivir",
    "class": "Antiviral",
    "dose_adult": "75 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Loperamide",
    "trade_ar": "لوبراميد",
    "ingredient": "Loperamide",
    "class": "Antidiarrheal",
    "dose_adult": "2 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Domperidone",
    "trade_ar": "دومبيريدون",
    "ingredient": "Domperidone",
    "class": "Antiemetic/prokinetic",
    "dose_adult": "10 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Ondansetron",
    "trade_ar": "أوندانسيترون",
    "ingredient": "Ondansetron",
    "class": "Antiemetic",
    "dose_adult": "4-8 mg tablet/ODT",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Risperidone",
    "trade_ar": "ريسبيريدون",
    "ingredient": "Risperidone",
    "class": "Antipsychotic",
    "dose_adult": "1-4 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Olanzapine",
    "trade_ar": "اولانزابين",
    "ingredient": "Olanzapine",
    "class": "Antipsychotic",
    "dose_adult": "5-10 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Sertraline",
    "trade_ar": "سيرترالين",
    "ingredient": "Sertraline",
    "class": "SSRI antidepressant",
    "dose_adult": "50-100 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Fluoxetine",
    "trade_ar": "فلوكسيتين",
    "ingredient": "Fluoxetine",
    "class": "SSRI",
    "dose_adult": "20 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Amitriptyline",
    "trade_ar": "أميتربتيلين",
    "ingredient": "Amitriptyline",
    "class": "TCA antidepressant",
    "dose_adult": "10-75 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Pregabalin",
    "trade_ar": "بريجابالين",
    "ingredient": "Pregabalin",
    "class": "Neuropathic pain/anticonvulsant",
    "dose_adult": "75-150 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Gabapentin",
    "trade_ar": "جابتين",
    "ingredient": "Gabapentin",
    "class": "Neuropathic pain/anticonvulsant",
    "dose_adult": "300-900 mg capsule",
    "form": "capsule",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Diltiazem",
    "trade_ar": "ديلتيازيم",
    "ingredient": "Diltiazem",
    "class": "Calcium channel blocker",
    "dose_adult": "60-120 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Verapamil",
    "trade_ar": "فيراباميل",
    "ingredient": "Verapamil",
    "class": "Calcium channel blocker",
    "dose_adult": "80 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Spironolactone",
    "trade_ar": "سبيرونولاكتون",
    "ingredient": "Spironolactone",
    "class": "Diuretic/K-sparing",
    "dose_adult": "25-50 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Propranolol",
    "trade_ar": "بروبرانولول",
    "ingredient": "Propranolol",
    "class": "Beta blocker",
    "dose_adult": "40-80 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Metoclopramide",
    "trade_ar": "ميتوكلوبراميد",
    "ingredient": "Metoclopramide",
    "class": "Antiemetic/prokinetic",
    "dose_adult": "10 mg tablet",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Sodium bicarbonate",
    "trade_ar": "بيكربونات الصوديوم",
    "ingredient": "Sodium bicarbonate",
    "class": "Antacid",
    "dose_adult": "Per product",
    "form": "liquid",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Gaviscon Advance",
    "trade_ar": "جافيسكون ادفانس",
    "ingredient": "Alginate antacid",
    "class": "Antacid",
    "dose_adult": "Liquid/tablets per label",
    "form": "liquid",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Saline nasal spray",
    "trade_ar": "رشاش ملحي للأنف",
    "ingredient": "Saline",
    "class": "Nasal spray",
    "dose_adult": "spray",
    "form": "spray",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Xylometazoline",
    "trade_ar": "زيلوميتازولين",
    "ingredient": "Xylometazoline",
    "class": "Nasal decongestant",
    "dose_adult": "Drops/spray per product",
    "form": "drops",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Artificial tears",
    "trade_ar": "دموع اصطناعية",
    "ingredient": "Carboxymethylcellulose",
    "class": "Ophthalmic lubricant",
    "dose_adult": "Eye drops",
    "form": "drops",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Chloramphenicol eye drops",
    "trade_ar": "قطرة كلورهامفينيكول",
    "ingredient": "Chloramphenicol",
    "class": "Ophthalmic antibiotic",
    "dose_adult": "Per product",
    "form": "drops",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Vitamin D",
    "trade_ar": "فيتامين د",
    "ingredient": "Cholecalciferol",
    "class": "Supplement",
    "dose_adult": "400-2000 IU per day",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Vitamin C",
    "trade_ar": "فيتامين سي",
    "ingredient": "Ascorbic acid",
    "class": "Supplement",
    "dose_adult": "500-1000 mg daily",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Multivitamin",
    "trade_ar": "مكمل متعدد",
    "ingredient": "Various vitamins",
    "class": "Supplement",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Calcium carbonate",
    "trade_ar": "كالسيوم",
    "ingredient": "Calcium carbonate",
    "class": "Supplement/antacid",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Zinc supplements",
    "trade_ar": "زنك",
    "ingredient": "Zinc",
    "class": "Supplement",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Nicotine patch",
    "trade_ar": "لاصقة النيكوتين",
    "ingredient": "Nicotine",
    "class": "Smoking cessation",
    "dose_adult": "Patch per product",
    "form": "patch",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Methotrexate",
    "trade_ar": "ميثوتريكسات",
    "ingredient": "Methotrexate",
    "class": "Immunosuppressant",
    "dose_adult": "Per specialist",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Hydroxychloroquine",
    "trade_ar": "هيدروكسي كلوروكين",
    "ingredient": "Hydroxychloroquine",
    "class": "Antimalarial/DMARD",
    "dose_adult": "Per specialist",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Epinephrine auto-injector",
    "trade_ar": "ايبينيفرين انجيكتور",
    "ingredient": "Epinephrine",
    "class": "Emergency anaphylaxis",
    "dose_adult": "Auto-injector (EpiPen)",
    "form": "injection",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Buprenorphine",
    "trade_ar": "بوبنرفين",
    "ingredient": "Buprenorphine",
    "class": "Opioid partial agonist",
    "dose_adult": "Per prescription",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Naloxone nasal spray",
    "trade_ar": "نالوكسون",
    "ingredient": "Naloxone",
    "class": "Opioid antidote",
    "dose_adult": "Nasal spray",
    "form": "spray",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Panadol Extra",
    "trade_ar": "بانادول إكسترا",
    "ingredient": "Paracetamol + Caffeine",
    "class": "Analgesic combo",
    "dose_adult": "Per product",
    "form": "tablet",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Suppository Paracetamol",
    "trade_ar": "باراسيتامول شرجي",
    "ingredient": "Paracetamol",
    "class": "Analgesic suppository",
    "dose_adult": "Per product",
    "form": "suppository",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Cough syrup general",
    "trade_ar": "شراب للسعال عام",
    "ingredient": "Dextromethorphan",
    "class": "Antitussive",
    "dose_adult": "Per product",
    "form": "syrup",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Throat lozenges",
    "trade_ar": "مصات للحلق",
    "ingredient": "Demulcents",
    "class": "Sore throat relief",
    "dose_adult": "Per product",
    "form": "lozenge",
    "source": "NHS / Mayo / WHO"
  },
  {
    "trade_en": "Miconazole oral gel",
    "trade_ar": "ميكونازول جل",
    "ingredient": "Miconazole",
    "class": "Antifungal oral",
    "dose_adult": "Per product",
    "form": "topical",
    "source": "NHS / Mayo / WHO"
  }
];