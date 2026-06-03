// --- Настройка облака (Supabase) -----------------------------------------
// Значения публичные и безопасные — доступ к данным защищён правилами
// Row Level Security на стороне базы. Чтобы вернуться в локальный режим,
// очисти строки ниже.

export const SUPABASE_URL = "https://alevvgargaoaufidvpbp.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_-rMDWvC3XwATKCCn1Rvtuw_-86bqUkg";

// --- Напоминания (Web Push) ----------------------------------------------
// Публичный VAPID-ключ для push-уведомлений. Публичный и безопасный.
// Пустая строка = напоминания выключены (раздел не показывается).
// Как включить: см. supabase/push_setup.sql и комментарий в
// supabase/functions/send-reminders/index.ts.
export const VAPID_PUBLIC_KEY = "BBEZSO-q77O_pWxw2PwPTWt4oirsWHBBucXs1Fk3YWl-QvMtT9EmTopPIVibLZdikvKnc26d2CDw4GSoln7iJTQ";
