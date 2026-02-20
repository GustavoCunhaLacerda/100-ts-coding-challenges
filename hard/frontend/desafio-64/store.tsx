import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Context API com performance ruim — qualquer mudança re-renderiza todos os consumidores
interface AppState {
  user: { id: string; name: string; role: string } | null;
  cart: { productId: string; qty: number; price: number }[];
  notifications: { id: string; message: string; read: boolean }[];
  theme: "light" | "dark";
  sidebarOpen: boolean;
}

type Action =
  | { type: "SET_USER"; payload: AppState["user"] }
  | { type: "ADD_TO_CART"; payload: AppState["cart"][0] }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "ADD_NOTIFICATION"; payload: AppState["notifications"][0] }
  | { type: "MARK_NOTIFICATION_READ"; payload: string }
  | { type: "TOGGLE_THEME" }
  | { type: "TOGGLE_SIDEBAR" };

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | null>(null);

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER": return { ...state, user: action.payload };
    case "ADD_TO_CART": return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART": return { ...state, cart: state.cart.filter((i) => i.productId !== action.payload) };
    case "ADD_NOTIFICATION": return { ...state, notifications: [...state.notifications, action.payload] };
    case "MARK_NOTIFICATION_READ": return { ...state, notifications: state.notifications.map((n) => n.id === action.payload ? { ...n, read: true } : n) };
    case "TOGGLE_THEME": return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "TOGGLE_SIDEBAR": return { ...state, sidebarOpen: !state.sidebarOpen };
    default: return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null, cart: [], notifications: [], theme: "light", sidebarOpen: false,
  });
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppState must be used within AppProvider");
  return ctx;
}
