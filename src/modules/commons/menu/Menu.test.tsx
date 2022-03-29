import Menu from './Menu';
import { createContainer, renderTestComponent } from '@shared/createContainer';


describe('menu component', () => {
  let render: renderTestComponent, container:HTMLDivElement;
  beforeEach(() => {
    ({ container, render } = createContainer());
  });
  it('should be render', () => {
    render(<Menu />);

    expect(container).not.toBeNull();
  });

  describe('menu element', () => {
    it('render menu element', () => {
      render(<Menu />);
      const menuELement = container.querySelector('menu');

      expect(menuELement).toBeTruthy();
    });

    it('render menu items', () => {
      render(<Menu />);
      const expectedLinks = [
        {
          href: 'http://localhost/new/products',
          textContent: 'New products'
        },
        {
          href: 'http://localhost/account',
          textContent: 'My account'
        },
        {
          href: 'http://localhost/account/wishlist',
          textContent: 'My wishlist'
        }
      ];
      const menuLinks = container.querySelectorAll<HTMLAnchorElement>('menu>a');

      menuLinks.forEach(({ href, textContent }, i) => {
        expect(expectedLinks[i].textContent).toEqual(textContent);
        expect(expectedLinks[i].href).toEqual(href);
      });
    });
  });
  describe('nav element', () => {
    it('renders logo', () => {
      render(<Menu />);
      const logoElement = container.querySelector('.logo');

      expect(logoElement).toBeTruthy();
    });
  });
});
