// 禁用页面立即跳转到 404 的辅助函数
// 静态模式下 Astro.redirect() 会生成 2 秒延迟的 meta-refresh 页面，
// 这里直接返回 content=0 的 HTML，实现无延迟跳转。
export function redirectTo404(): Response {
	return new Response(
		'<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/404/"><title>Redirecting</title>',
		{ status: 200, headers: { "Content-Type": "text/html" } },
	);
}
