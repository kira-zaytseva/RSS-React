import * as jsxRuntime from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useLocation, useParams, useNavigate, NavLink, Routes, Route } from "react-router-dom";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useForm } from "react-hook-form";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const aboutUs = "";
const AboutUs = () => {
  return /* @__PURE__ */ jsx("main", { className: "main", children: /* @__PURE__ */ jsxs("section", { className: "about-info", "data-testid": "AboutUs", children: [
    /* @__PURE__ */ jsx("img", { src: "https://i.imgur.com/BvB4bUy.jpg", className: "about-photo", alt: "Kira Zaytseva" }),
    /* @__PURE__ */ jsx("h1", { className: "about-name", children: "Hi! I am Kira Zaytseva" }),
    /* @__PURE__ */ jsx("p", { className: "about-description", children: "You are on the online art gallery. Enjoy!" }),
    /* @__PURE__ */ jsxs("div", { className: "about-contacts", children: [
      /* @__PURE__ */ jsx("h2", { className: "about-contacts-title", children: "Contact information" }),
      /* @__PURE__ */ jsxs("ul", { className: "about-contacts-list", children: [
        /* @__PURE__ */ jsx("li", { children: "🤙 +375 29 138 90 24" }),
        /* @__PURE__ */ jsx("li", { children: "📧 kira.zaytseva97@gmail.com" }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/kira-zaytseva/", target: "_blank", rel: "noreferrer", children: "💬 Linkedin" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/kira-zaytseva", target: "_blank", rel: "noreferrer", children: "💻 Github" }) }),
        /* @__PURE__ */ jsx("li", { children: "🗣 Discord: Kira_zayts#7305" })
      ] })
    ] })
  ] }) });
};
const withRouter = (Component) => {
  return (props) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    return /* @__PURE__ */ jsx(Component, { ...props, location, params, navigate });
  };
};
const header = "";
const HeaderComponent = ({ location: { pathname } }) => {
  return /* @__PURE__ */ jsxs("header", { className: "header", "data-testid": "Header", children: [
    /* @__PURE__ */ jsx("span", { children: pageNames[pathname] || "Error page" }),
    /* @__PURE__ */ jsx("nav", { className: "header__nav", children: /* @__PURE__ */ jsxs("ul", { className: "header__nav__list", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: RouteName.MAIN,
          className: ({ isActive }) => isActive ? "nav__link-active" : "nav__link",
          children: "Main"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: RouteName.ABOUT,
          className: ({ isActive }) => isActive ? "nav__link-active" : "nav__link",
          children: "About Us"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: RouteName.FORM,
          className: ({ isActive }) => isActive ? "nav__link-active" : "nav__link",
          children: "Form"
        }
      ) })
    ] }) })
  ] });
};
const Header = withRouter(HeaderComponent);
const errorPage = "";
const footer = "";
const rssSchool = "/assets/rs_school_js-3d99c85e.svg";
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "footer", "data-testid": "Footer", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "footer__github-link",
        href: "https://github.com/kira-zaytseva",
        target: "_blank",
        rel: "noreferrer",
        children: "kira-zaytseva"
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "footer__school-link",
        href: "https://rs.school/js/",
        target: "_blank",
        rel: "noreferrer",
        children: /* @__PURE__ */ jsx("img", { src: rssSchool, className: "footer__school-img" })
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "footer__year", children: "2023" })
  ] });
};
const ErrorPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "app-wrapper", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "main", children: [
      /* @__PURE__ */ jsx("h1", { className: "error-title", "data-testid": "ErrorPage", children: "Oops, page doesn`t exist" }),
      /* @__PURE__ */ jsx("img", { src: "https://i.imgur.com/25BmMeM.jpg", alt: "", className: "error-image" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Button$1 = "";
const Button = ({ btnText, classes }) => {
  return /* @__PURE__ */ jsx("button", { type: "submit", className: `button ${classes}`, "data-testid": "Button", children: btnText });
};
const Input$1 = "";
const Input = ({
  classes,
  type,
  placeholder,
  id,
  required = false,
  currentRef,
  onChange,
  value,
  name,
  onBlur
}) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      id,
      className: `input ${classes}`,
      type,
      placeholder,
      required,
      ref: currentRef,
      onChange,
      value,
      name,
      onBlur,
      "data-testid": "Input"
    }
  );
};
const SearchBar$1 = "";
function SearchBar({ onChange, searchValue, onSearch }) {
  return /* @__PURE__ */ jsxs("form", { className: "search-form", "data-testid": "SearchBar", onSubmit: onSearch, children: [
    /* @__PURE__ */ jsx(Input, { type: "search", classes: "search-input", value: searchValue, onChange }),
    /* @__PURE__ */ jsx(Button, { btnText: "search" })
  ] });
}
const CardModal$1 = "";
const CardModal = ({
  classes,
  imgAlt,
  imgId,
  cardTitle,
  imgAuthor,
  imgYear,
  place,
  imgDepartment,
  onClose
}) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "modal-bg", onMouseDown: handleClickOutside, children: /* @__PURE__ */ jsxs("section", { className: `card-modal ${classes}`, "data-testid": "CardModal", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`,
        alt: imgAlt,
        className: "card-modal-img"
      }
    ),
    /* @__PURE__ */ jsxs("ul", { className: "card-modal-description", children: [
      /* @__PURE__ */ jsxs("li", { className: "card-modal-row", children: [
        "Title: ",
        /* @__PURE__ */ jsx("span", { className: "card-modal-info", children: cardTitle })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "card-modal-row", children: [
        "Author: ",
        /* @__PURE__ */ jsx("span", { className: "card-modal-info", children: imgAuthor })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "card-modal-row", children: [
        "Department: ",
        /* @__PURE__ */ jsx("span", { className: "card-modal-info", children: imgDepartment })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "card-modal-row", children: [
        "Place: ",
        /* @__PURE__ */ jsx("span", { className: "card-modal-info", children: place || "unknown" })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "card-modal-row", children: [
        "Year: ",
        /* @__PURE__ */ jsx("span", { className: "card-modal-info", children: imgYear })
      ] })
    ] })
  ] }) });
};
const Card$1 = "";
const Card = ({
  classes,
  imgAlt,
  imgId,
  imgAuthor,
  cardTitle,
  place,
  imgDepartment,
  imgYear
}) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const cardOnClick = (e) => {
    e.stopPropagation();
    setIsCardModalOpen(true);
  };
  const onClose = () => {
    setIsCardModalOpen(false);
  };
  return /* @__PURE__ */ jsxs("li", { className: `card ${classes}`, onClickCapture: cardOnClick, id: imgId, "data-testid": "Card", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`,
        alt: imgAlt,
        className: "card-img"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "card-description", children: [
      /* @__PURE__ */ jsx("p", { className: "card-title", children: cardTitle }),
      /* @__PURE__ */ jsx("span", { children: imgAuthor })
    ] }),
    isCardModalOpen && /* @__PURE__ */ jsx(
      CardModal,
      {
        imgAlt,
        imgAuthor,
        imgId,
        imgDepartment,
        cardTitle,
        imgYear,
        place,
        onClose
      }
    )
  ] });
};
const CardList$1 = "";
const CardList = ({ classes, list }) => {
  return /* @__PURE__ */ jsx("ul", { className: `list card-list ${classes}`, "data-testid": "card-list", children: list.map((el) => {
    return /* @__PURE__ */ jsx(
      Card,
      {
        id: el.id,
        imgId: el.image_id,
        imgAlt: el.title,
        cardTitle: el.title,
        imgAuthor: el.artist_title,
        place: el.place_of_origin,
        imgDepartment: el.department_title,
        imgYear: el.date_end
      },
      el.id
    );
  }) });
};
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const initialState$1 = {
  searchValue: "",
  submittedSearch: ""
};
const searchSlice = createSlice({
  name: "searching",
  initialState: initialState$1,
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    },
    submitSearch: (state, action) => {
      state.submittedSearch = action.payload;
    }
  }
});
const searchReducer = searchSlice.reducer;
const main = "";
const galleryApi = createApi({
  reducerPath: "galleryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.artic.edu/api/v1/" }),
  endpoints: (build) => ({
    fetchAllArts: build.query({
      query: () => ({
        url: "artworks/",
        params: {
          fields: "id,title,image_id,artist_title,place_of_origin,department_title,date_end"
        }
      })
    }),
    fetchSearchingArts: build.query({
      query: (searchValue = "") => ({
        url: "artworks/search",
        params: {
          q: searchValue,
          fields: "id,title,image_id,artist_title,place_of_origin,department_title,date_end"
        }
      })
    })
  })
});
const Main = () => {
  const dispatch = useAppDispatch();
  const { searchValue, submittedSearch } = useAppSelector((state) => state.searchReducer);
  const { data: arts, isLoading } = galleryApi.useFetchAllArtsQuery("");
  const { data: searchedArts, isLoading: isLoadingSearchedArts } = galleryApi.useFetchSearchingArtsQuery(submittedSearch);
  const currentArts = useMemo(() => {
    if (submittedSearch && (searchedArts == null ? void 0 : searchedArts.data)) {
      return searchedArts.data;
    }
    return (arts == null ? void 0 : arts.data) || [];
  }, [arts, searchedArts, submittedSearch]);
  const onChange = (e) => {
    dispatch(searchSlice.actions.search(e.target.value));
  };
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(searchSlice.actions.submitSearch(searchValue));
  };
  return /* @__PURE__ */ jsxs("main", { className: "main-wrapper", children: [
    /* @__PURE__ */ jsx(SearchBar, { onChange, searchValue, onSearch }),
    submittedSearch && /* @__PURE__ */ jsxs("p", { children: [
      "Result of searching: ",
      submittedSearch
    ] }),
    isLoading || isLoadingSearchedArts ? /* @__PURE__ */ jsx("p", { className: "response-progress", children: "Wainting... Response is in progress" }) : /* @__PURE__ */ jsx(CardList, { list: currentArts })
  ] });
};
const ERROR_MESSAGE = {
  IS_REQUIRED: "Field is required",
  TOO_SHORT: "Too short"
};
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
const RadioButton$1 = "";
const RadioButton = ({
  classes,
  options,
  error,
  legend,
  name,
  register,
  rules
}) => {
  return /* @__PURE__ */ jsxs("fieldset", { className: "radio-fieldset", "data-testid": "RadioButton", children: [
    /* @__PURE__ */ jsx("legend", { children: legend }),
    options == null ? void 0 : options.map((el) => /* @__PURE__ */ jsxs("div", { className: "radio-field", children: [
      /* @__PURE__ */ jsx("label", { className: "radio-label", htmlFor: el, children: el }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: el,
          className: `radio ${classes}`,
          type: "radio",
          ...register ? { ...register(name, rules) } : {},
          value: el
        }
      )
    ] }, el)),
    error && /* @__PURE__ */ jsx("span", { className: "form-error", children: error })
  ] });
};
const select = "";
const Select = React.forwardRef(
  ({ classes, options, id, label, defaultValue, error, onBlur, onChange, name }, ref) => {
    return /* @__PURE__ */ jsxs("fieldset", { className: "select-fieldset", "data-testid": "Select", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: id, children: label }),
      /* @__PURE__ */ jsx(
        "select",
        {
          className: `select ${classes}`,
          id,
          defaultValue,
          ref,
          onBlur,
          onChange,
          name,
          children: options.map((option) => /* @__PURE__ */ jsx("option", { value: option, children: option }, option))
        }
      ),
      error && /* @__PURE__ */ jsx("span", { className: "form-error", children: error })
    ] });
  }
);
const profile = "";
const Profile = ({
  userName,
  birthday,
  country,
  gender,
  avatar,
  policy,
  marketing
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "profile", "data-testid": "Profile", children: [
    /* @__PURE__ */ jsx("img", { src: avatar, alt: userName, className: "profile-img" }),
    /* @__PURE__ */ jsxs("span", { children: [
      "UserName: ",
      userName
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Birthday: ",
      birthday
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Country: ",
      country
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Gender: ",
      gender ? "Woman" : "Man"
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Policy agreement: ",
      policy.toString()
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "Marketing agreement: ",
      marketing.toString()
    ] })
  ] });
};
const FormField$1 = "";
const FormField = React.forwardRef(
  ({
    classes,
    type,
    placeholder,
    id,
    label,
    fieldsetClasses,
    labelClasses,
    error,
    onChange,
    value,
    name,
    onBlur
  }, ref) => {
    return /* @__PURE__ */ jsxs("fieldset", { className: `form-fieldset ${fieldsetClasses}`, "data-testid": "FormField", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: id, className: labelClasses, children: label }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id,
          classes,
          type,
          placeholder,
          currentRef: ref,
          onChange,
          value,
          name,
          onBlur
        }
      ),
      error && /* @__PURE__ */ jsx("span", { className: "form-error", children: error })
    ] });
  }
);
const initialState = {
  cards: [],
  isLoading: false,
  error: ""
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    submitProfile: (state, action) => {
      state.cards = [...state.cards, action.payload];
    }
  }
});
const userReducer = userSlice.reducer;
const Form$1 = "";
const Form = ({ classes }) => {
  var _a, _b, _c, _d, _e, _f;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset
  } = useForm();
  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const { cards } = useAppSelector((state) => state.userReducer);
  const hideMessage = () => {
    setTimeout(() => {
      setIsActiveMessage(false);
    }, 2e3);
  };
  const onSubmit = (data) => {
    const { avatar, ...rest } = data;
    try {
      const fileInput = URL.createObjectURL(avatar[0]);
      dispatch(
        userSlice.actions.submitProfile({
          avatar: fileInput,
          ...rest
        })
      );
      setIsActiveMessage(true);
      reset();
      hideMessage();
    } catch (error) {
      setError("avatar", { type: "custom", message: "Invalid image" });
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "main", children: [
    /* @__PURE__ */ jsxs("form", { className: `form ${classes}`, onSubmit: handleSubmit(onSubmit), "data-testid": "Form", children: [
      isActiveMessage && /* @__PURE__ */ jsx("p", { className: "submit-message", children: "Information has been submitted" }),
      /* @__PURE__ */ jsx(
        FormField,
        {
          type: "text",
          label: "User name",
          placeholder: "Enter your username",
          id: "name",
          ...register("userName", {
            required: ERROR_MESSAGE.IS_REQUIRED,
            minLength: { value: 3, message: ERROR_MESSAGE.TOO_SHORT }
          }),
          error: (_a = errors.userName) == null ? void 0 : _a.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          type: "date",
          label: "Your birthday",
          id: "date",
          ...register("birthday", {
            required: ERROR_MESSAGE.IS_REQUIRED,
            pattern: {
              value: /^(200[0-5]|19[0-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/gm,
              message: "You are too young or too old"
            }
          }),
          error: (_b = errors.birthday) == null ? void 0 : _b.message
        }
      ),
      /* @__PURE__ */ jsx(
        Select,
        {
          options: countries,
          label: "Country",
          id: "countries",
          ...register("country", {
            required: ERROR_MESSAGE.IS_REQUIRED
          }),
          error: (_c = errors.country) == null ? void 0 : _c.message
        }
      ),
      /* @__PURE__ */ jsx(
        RadioButton,
        {
          legend: "Gender",
          options: ["Man", "Woman"],
          register,
          name: "gender",
          rules: { required: ERROR_MESSAGE.IS_REQUIRED },
          error: (_d = errors.gender) == null ? void 0 : _d.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          type: "file",
          label: "Profile picture",
          id: "avatar",
          classes: "input-file",
          ...register("avatar", {
            required: ERROR_MESSAGE.IS_REQUIRED
          }),
          error: (_e = errors.avatar) == null ? void 0 : _e.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          type: "checkbox",
          classes: "input-checkbox",
          label: "I agree to the Privacy Policy",
          id: "policy",
          fieldsetClasses: "checkbox-fieldset",
          labelClasses: "label-checkbox",
          ...register("policy", {
            required: ERROR_MESSAGE.IS_REQUIRED
          }),
          error: (_f = errors.policy) == null ? void 0 : _f.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          type: "checkbox",
          classes: "input-checkbox",
          label: "Select this box to receive updates and marketing.",
          id: "marketing",
          fieldsetClasses: "checkbox-fieldset",
          labelClasses: "label-checkbox",
          ...register("marketing")
        }
      ),
      /* @__PURE__ */ jsx(Button, { btnText: "submit" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "profile-list", children: cards.map((el, index2) => /* @__PURE__ */ jsx(
      Profile,
      {
        userName: el.userName,
        birthday: el.birthday,
        country: el.country,
        gender: el.gender,
        avatar: el.avatar,
        policy: el.policy,
        marketing: el.marketing
      },
      index2
    )) })
  ] });
};
const rootReducer = combineReducers({
  userReducer,
  searchReducer,
  [galleryApi.reducerPath]: galleryApi.reducer
});
const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(galleryApi.middleware)
  });
};
const App = "";
const index = "";
const store = setupStore();
var RouteName = /* @__PURE__ */ ((RouteName2) => {
  RouteName2["MAIN"] = "/";
  RouteName2["ABOUT"] = "/about";
  RouteName2["FORM"] = "/form";
  return RouteName2;
})(RouteName || {});
const pageNames = {
  "/": "MainPage: Gallery",
  "/about": "About Us",
  "/form": "Form"
};
const Router = () => {
  return /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsxs("div", { className: "app-wrapper", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Main, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutUs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/form", element: /* @__PURE__ */ jsx(Form, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(ErrorPage, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
};
const render = ({ path }) => {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(Router, {}) })
  );
};
export {
  render
};
