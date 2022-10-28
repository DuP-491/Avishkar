export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leaderboard: {
        Row: {
          user_id: string
          name: string | null
          coins: number | null
          last_qid: number | null
          kills: number | null
        }
        Insert: {
          user_id: string
          name?: string | null
          coins?: number | null
          last_qid?: number | null
          kills?: number | null
        }
        Update: {
          user_id?: string
          name?: string | null
          coins?: number | null
          last_qid?: number | null
          kills?: number | null
        }
      }
      trivia: {
        Row: {
          id: number
          created_at: string | null
          question: string | null
          type: string | null
          op1: string | null
          op2: string | null
          op3: string | null
          op4: string | null
          answer: string | null
          coins: number | null
          hint: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          question?: string | null
          type?: string | null
          op1?: string | null
          op2?: string | null
          op3?: string | null
          op4?: string | null
          answer?: string | null
          coins?: number | null
          hint?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          question?: string | null
          type?: string | null
          op1?: string | null
          op2?: string | null
          op3?: string | null
          op4?: string | null
          answer?: string | null
          coins?: number | null
          hint?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
