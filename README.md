# Clef for WHMCS

*NOTE: this add-on is currently in BETA. Please treat appropriately.*

Welcome to the Clef for WHMCS development repository!

Clef is easy, secure, passwordless two-factor authentication for your WHMCS clients. With Clef, your users get the benefits of single sign on across all of their WHMCS, WordPress, Joomla, Drupal, and Magento sites with the security of 2-factor authentication and public key cryptography — it's the best of both worlds. Replacing passwords, Clef identifies you with your phone — simply wave it in front of your computer and you're instantly logged in.

## Installation

To install the latest stable build of Clef for WHMCS, follow these steps:

1. Download the [latest release](https://github.com/clef/whmcs/releases)
2. Unzip the zipped source code and rename the unzipped directory from `whmcs-X.X.X` to `clef`
3. Copy the `clef`  directory into `modules/addons/`
4. Log into the WHMCS administrator portal and go to Setup > Addon Modules. 
5. Activate Clef and configure it with a new Clef application ID and Secret. If the base URL of your install is `http://example.com`, you should set:
  * Application Domain: `http://example.com`
  * Logout Hook URL: `http://example.com/?m=clef`

To install, contribute to, and test the developer build, you should clone this repository and work on master.

## Support

For support, we recommend emailing us directly at [support@getclef.com](mailto:support@getclef.com) or joining our [support chat room](http://www.hipchat.com/go5kUkq90). 

## Bugs

If you find an issue, let us know in the issues section!

## Contribution Guidelines

From the [Rubinius](http://rubini.us/) contribution page:

> Writing code and participating should be fun, not an exercise in
> perseverance. Stringent commit polices, for whatever their other
> qualities may bring, also mean longer turnaround times.

Submit a patch and once it’s accepted, you’ll get commit access to the
repository. Feel free to fork the repository and send a pull request,
once it’s merged in you’ll get added. If not, feel free to bug
[jessepollak](http://github.com/jessepollak) about it.

Also, if you’re hacking away, hop in the [Clef support room](https://www.hipchat.com/go5kUkq90). Chances are someone else will be around to answer
questions or bounce ideas off of.

How To Contribute
-----------------

* Clone: `git clone git://github.com/clef/whmcs.git`
* Create a topic branch: `git checkout -b awesome_feature`
* Commit away.
* Keep up to date: `git fetch && git rebase origin/master`.

Once you’re ready:

* Fork the project on GitHub
* Add your repository as a remote: `git remote add your_remote your_repo`
* Push up your branch: `git push your_remote awesome_feature`
* Create a Pull Request for the topic branch, asking for review.

Once it’s accepted:

* If you want access to the core repository feel free to ask! Then you
can change origin to point to the Read+Write URL:

```
git remote set-url origin git@github.com:clef/whmcs.git
```

Otherwise, you can continue to hack away in your own fork.

If you’re looking for things to hack on, please check 
[GitHub Issues](http://github.com/clef/whmcs/issues). 

*thanks to [rubygems](https://github.com/rubygems/rubygems.org) for inspiration of our guidelines*
