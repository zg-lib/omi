webpackJsonp([2],{100:function(n,o){n.exports="## Top App Bar\n\nTop App Bar\u5145\u5f53\u5e94\u7528\u7a0b\u5e8f\u6807\u9898\uff0c\u5bfc\u822a\u56fe\u6807\u548c\u64cd\u4f5c\u9879\u7b49\u9879\u76ee\u7684\u5bb9\u5668\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-top-app-bar\n  title='Omim'\n  short\n  onNavigation\n  navigation-icon=\"{\n    view: 24,\n    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n  }\"\n  onAction0\n  action-items=\"[\n    {\n      view: 48,\n      path: 'M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z'\n    }\n  ]\"\n></m-top-app-bar>\n```\n\n## Omi \u4e2d\u4f7f\u7528\n\nJSX:\n\n```jsx\n<m-top-app-bar\n  adjust\n  heading='Click to show menus'\n  onNavigation={this.onDemoStart}\n  navigation-icon={{\n    view: 24,\n    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n  }}\n  onAction0={this.onDemoStart}\n  action-items={[\n    {\n      view: 24,\n      path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n    }\n  ]}\n/>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| heading | string | -- | \u6807\u9898\u5185\u5bb9 |\n| short | boolean | -- | \u5e26\u6709\u7f29\u77ed\u52a8\u52a8\u753b |\n| shortCollapsed | boolean | -- | \u56fa\u5b9a\u4e3a\u7f29\u77ed\u72b6\u6001 |\n| prominent | boolean | -- | \u7a81\u51fa\u663e\u793a\u6807\u9898 |\n| dense | boolean | -- | \u66f4\u7d27\u51d1\u7684\u9876\u90e8\u5e94\u7528\u680f |\n| fixed | boolean | -- | \u56fa\u5b9a\u9876\u90e8\u5e94\u7528\u680f |\n| adjust | boolean | -- | \u81ea\u52a8\u586b\u5145\u9876\u90e8\u5e94\u7528\u680f\u9ad8\u5ea6 |\n| navigationIcon | object | -- | \u5de6\u4fa7\u6309\u94ae |\n| actionItems | object | -- | \u53f3\u4fa7\u6309\u94ae |\n| scrollTarget | EventTarget | -- | \u8bbe\u7f6e\u76ee\u6807\u6eda\u52a8\u6761(JSX \u4e2d\u4f7f\u7528) |\n| scrollTargetDrawer | boolean | -- | \u8bbe\u7f6e\u76ee\u6807\u6eda\u52a8\u6761(m-drawer \u7ec4\u4ef6\u4f7f\u7528 frame \u5c5e\u6027\u4e14\u7279\u5b9a\u6761\u4ef6\u4e0b\u4f7f\u7528) |\n| onNav | function | -- | \u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u89e6\u53d1 |\n| onNavigation | function | -- | \u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u89e6\u53d1 |\n| onAction(0-N) | function | -- | \u5355\u51fb\u53f3\u4fa7\u6309\u94ae\u89e6\u53d1\uff0c\u5c3e\u52a0\u7f16\u53f7\u5bf9\u5e94\u53f3\u4fa7\u6309\u94ae\u6570\u91cf |\n"}});
//# sourceMappingURL=2.d9c4e5d5.chunk.js.map