/**
 * 提示词模板接口
 */
export interface PromptTemplate {
  id: string;
  name: string;
  template: string;
  isBuiltIn?: boolean; // 是否为内置模板（不可删除）
}

/**
 * 内置的提示词模板列表
 */
export const BUILT_IN_TEMPLATES: PromptTemplate[] = [
  {
    id: 'realistic',
    name: '真实风格',
    isBuiltIn: true,
    template: `根据这张照片生成一张新图片。

这个人的梦想是：{dream}

要求：
1. 必须保持真实照片风格，不要卡通化、不要二次元、不要动漫风格
2. 保持照片中人物的面部特征完全一致，包括五官、肤色、表情
3. 根据梦想，给人物穿上合适的服装或造型
4. 背景要符合梦想的场景，使用真实场景而非绘画风格
5. 整体氛围：快乐、自信、充满希望
6. 输出高质量真实感照片`,
  },
  {
    id: 'cute-doodle',
    name: '可爱涂鸦',
    isBuiltIn: true,
    template: `根据这张照片生成一张新图片。

这个人的梦想是：{dream}

要求：
1. 必须保持真实照片风格，不要卡通化、不要二次元、不要动漫风格
2. 保持照片中人物的面部特征完全一致，包括五官、肤色、表情
3. 根据梦想，给人物穿上合适的服装或造型
4. 背景要符合梦想的场景，使用真实场景而非绘画风格
5. 整体氛围：快乐、自信、充满希望
6. 在图片上涂鸦，表达你对这个人的赞美，记得一定要很可爱萌萌哒
7. 输出高质量真实感照片`,
  },
  {
    id: 'cartoon',
    name: '卡通风格',
    isBuiltIn: true,
    template: `根据这张照片生成一张新图片。

这个人的梦想是：{dream}

要求：
1. 使用可爱的卡通风格
2. 保持人物的主要特征可辨认
3. 根据梦想，给人物穿上合适的服装或造型
4. 背景要符合梦想的场景，使用卡通风格
5. 整体氛围：可爱、活泼、充满童趣
6. 可以添加一些可爱的装饰元素`,
  },
];

// 兼容旧代码
export const PROMPT_TEMPLATES = BUILT_IN_TEMPLATES;

/**
 * 默认提示词模板（使用真实风格）
 */
export const DEFAULT_PROMPT_TEMPLATE = BUILT_IN_TEMPLATES[0].template;

/**
 * 模板存储key
 */
export const TEMPLATES_STORAGE_KEY = 'dream-dress-templates';

/**
 * 生成自定义梦想的提示词
 * @param customDream 用户输入的梦想
 * @param template 可选的自定义模板，使用 {dream} 作为占位符
 */
export function generateCustomPrompt(customDream: string, template?: string): string {
  const promptTemplate = template || DEFAULT_PROMPT_TEMPLATE;
  return promptTemplate.replace('{dream}', customDream);
}
